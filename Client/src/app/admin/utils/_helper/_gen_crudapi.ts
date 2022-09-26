/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import {
    addDoc,
    arrayRemove,
    arrayUnion,
    collection,
    CollectionReference,
    deleteDoc,
    doc,
    DocumentData,
    DocumentReference,
    Firestore,
    getDoc,
    getDocs,
    getFirestore,
    onSnapshot,
    QuerySnapshot,
    setDoc,
    updateDoc,
    WhereFilterOp,
} from 'firebase/firestore';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ComparisonOperators } from '../_enums/comparison-operators.enum';

export abstract class AbstractRestService<T> {
    db: Firestore;
    Col: CollectionReference<DocumentData>;
    ColType!: CollectionReference<DocumentData>;
    Collection!: AngularFirestoreCollection<T>;
    private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
    obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

    constructor(
        protected collectionName: string,
        protected afs: AngularFirestore,
        protected typeDb?: string
    ) {
        this.db = getFirestore();
        this.Col = collection(this.db, collectionName);

        if (typeDb) {
            this.ColType = collection(this.db, typeDb);
            //get realtime data
            this.getRealtimeData(this.ColType);
        }

        // Get Realtime Data
        this.getRealtimeData(this.Col);
    }

    getRealtimeData(Col:any): void {
        onSnapshot(
            Col,
            (snapshot: QuerySnapshot<DocumentData>) => {
                this.updatedSnapshot.next(snapshot);
            },
            (err) => {}
        );
    }

    //get a list of documents
    async getList(): Promise<QuerySnapshot<DocumentData>> {
        const snapshot = await getDocs(this.Col);
        return snapshot;
    }

    //get documents  filter
    //https://cloud.google.com/firestore/docs/query-data/queries
    getListFiltered(filterName: any, filter: any) {
        const snapshot: any = this.afs
            .collection(this.collectionName, (ref) =>
                ref.where(`${filterName}`, '==', filter)
            )
            .snapshotChanges();
        return snapshot;
    }

    async getListFilteredTwo(filterName: any, filter: any) {
        const snapshot: any = this.afs
            .collection(this.collectionName, (ref) =>
                ref.where(`${filterName}`, ComparisonOperators.equal, filter)
            )
            .snapshotChanges()
            .pipe(
                shareReplay({ bufferSize: 1, refCount: true })
              ) ;
        return snapshot;
    }

    getListFilteredWithCondition(filterArrayName: any, filterQuery: WhereFilterOp, filter: any) {
        const snapshot: any = this.afs
            .collection(this.collectionName, (ref) =>
                ref.where(`${filterArrayName}`, filterQuery, filter)
            )
            .snapshotChanges().pipe(
                shareReplay({ bufferSize: 1, refCount: true })
              ) ;
        return snapshot;
    }

    /***
     * *Add to the collection using custom Id
     * !Specify your own Id
     */

    getListFilteredWithTwoConditions(
        filterFieldOne: any,
        conditionOne: any,
        filterFieldTwo: any,
        conditionTwo: any
    ) {
        const snapshot: any = this.afs
            .collection(this.collectionName, (ref) =>
                ref
                    .where(
                        `${filterFieldOne}`,
                        ComparisonOperators.equal,
                        conditionOne
                    )
                    .where(
                        `${filterFieldTwo}`,
                        ComparisonOperators.equal,
                        conditionTwo
                    )
            )
            .snapshotChanges()
            .pipe(
                shareReplay({ bufferSize: 1, refCount: true })
              ) ;
        return snapshot;
    }

    /***
     * *Add to the collection
     */
    async add(data: T): Promise<DocumentReference<any>> {
        return await addDoc(this.Col, data);
    }

    /***
     * *Add to the collection using custom Id
     * !Specify your own Id
     */
    async addwithId(data: T, id: string) {
        return this.afs.collection(this.collectionName).doc(id).set(data);
    }

    /***
     * * Add to the specific collection
     * !specify collection
     */
    async addToSpecificCollection(data: any, collection: string) {
        return this.afs.collection(collection).add({ ...data });
    }

    /***
     * *get types
     */
    async getTypes(): Promise<QuerySnapshot<DocumentData>> {
        const snapshot = await getDocs(this.ColType);
        return snapshot;
    }

    // get document by id
    async getDocument(id: string) {
        const docRef = doc(this.db, this.collectionName, id);
        const docSnap = await getDoc(docRef);
        const info = docSnap.data();
        return info;
    }

    async delete(docId: string) {
        const docRef = doc(this.db, this.collectionName, docId);
        await deleteDoc(docRef);
        return;
    }

    async update(docId: string, data: any) {
        const docRef = doc(this.db, this.collectionName, docId);
        await updateDoc(docRef, { ...data });

        // this.afs.doc(`options/${id}`).update({rating:$rating})
        return;
    }

    //add to array of documents
    async addToArrayOfDocument(docId: string, data: unknown, arrayName: any) {
        const docRef = doc(this.db, this.collectionName, docId);
        await updateDoc(docRef, {
            [arrayName]: arrayUnion(data),
        });
    }

    //add to array of documents
    async removeOnArrayOfDocument(docId: string, data: unknown, arrayName: any) {
        const docRef = doc(this.db, this.collectionName, docId);
        await updateDoc(docRef, {
            [arrayName]: arrayRemove(data),
        });
    }

    //capture event income
    async updateInnerData(
        docId: string,
        data: any,
        innerCollection: string,
        innerID?: string
    ) {
        const snapshot: any = this.afs.firestore
            .collection(this.collectionName)
            .doc(docId)
            .collection(innerCollection)
            .doc(innerID)
            .set(data);
        return snapshot;
    }

    //Add set document
    async addSetToDocument(docId: any, data: any) {
        const frankDocRef = doc(this.db, this.collectionName, docId);
        await setDoc(frankDocRef, {
            ...data,
        });
    }
}
