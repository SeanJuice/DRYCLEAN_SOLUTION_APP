/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
;
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs
import { TDocumentDefinitions } from 'pdfmake/interfaces';
@Injectable({
    providedIn: 'root',
})
export class PdfGenerateService {
    constructor() {}

    async generatePDF(action = 'open', tableData: any, GeneralData: any) {
       console.log(tableData);
        const docDefinition: TDocumentDefinitions = {
            content: [
                {
                    image: 'logo',
                    fit: [500, 200],
                    alignment: 'center',
                },
                {
                    text: `Valley Centre`,
                    fontSize: 16,
                    bold: true,
                    style: 'sectionHeader',

                },
                {
                    text:`Invoice#:  ${GeneralData.OrderNumber}`,
                    fontSize: 12,
                },
                {
                    text:`Paid :  Yes`,
                    fontSize: 12,
                },
                {
                    text:`Customer Name: ${GeneralData.Customer.Name} ${GeneralData.Customer.Surname}`,
                    fontSize: 12,
                },

                {
                    text: 'Details',
                    style: 'sectionHeader',
                },
                {
                    columns: [
                        [
                            {
                                text: `Invoice Date: ${GeneralData.InvoiceDate}`,
                                fontSize: 12,
                            },
                            {
                                text: `Collection Date:  ${GeneralData.CollectionDate}`,
                                fontSize: 12,
                            },
                            {
                                text: `Collection Time:  ${GeneralData.CollectionTime}`,
                                fontSize: 12,
                            },

                        ],
                        [
                            {
                                text: `Date Generated: ${new Date().toLocaleString()}`,
                                alignment: 'right',
                            },
                            {
                                text: `No : ${(
                                    Math.random() * 1000
                                ).toFixed(0)}`,
                                alignment: 'right',
                            },
                        ],
                    ],
                },
                {
                    text: 'Prices',
                    style: 'sectionHeader',
                },
                {
                    table: {
                        headerRows: 1,
                        heights:[60],
                        widths: ['*', '*', '*', '*'],
                        body: [
                            [
                                {
                                    text: 'Product Name',
                                    fillColor: 'navy',
                                    color: 'white',
                                },
                                {
                                    text: 'Quantity',
                                    fillColor: 'navy',
                                    color: 'white',
                                },
                                {
                                    text: 'Service',
                                    fillColor: 'navy',
                                    color: 'white',
                                },
                                {
                                    text: 'Price',
                                    fillColor: 'navy',
                                    color: 'white',
                                },
                            ],
                            ...tableData.map((p: any) => [
                                p.CategoryName,
                                p.Service,
                                p.ServiceQuantity,
                                p.ServicePrice,

                            ]),
                        [{}, {}, {text: 'Total ', style: 'tableHeader', alignment: 'center'},{text: GeneralData.totalAmount } ],
                        [{}, {}, {text: 'Total(Incl. VAT)', style: 'tableHeader', alignment: 'center'},{text: GeneralData.totalAmountWithVAT } ],
                       [{}, {}, {text: 'VAT @ 15%', style: 'tableHeader', alignment: 'center'},{text: GeneralData.VAT } ],
                        ],
                    },
                    layout: {
                        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                        fillColor: function(rowIndex, _node) {
                            return rowIndex % 2 === 0 ? '#ADD8E6' : null;
                        },
                    },
                },
                {
                    text: `Management is not responsible for loss of articles through burglary.
                    theft and fire as well as stains not removed, articles marked hand washed colours that fade or run and articles that cannot withstand the process of dry cleaning.
                     Goods not claimed after 14 days shall be sold to cover costs. All washing will be tumble dried If necessary, washing will be dried for more than one cycle. Laundry and dry cleaning left at owner's risk. `,
                    style: 'section',

                },
                {
                    text: `NB Exceptions: Please note
                    The following items will take 1 extra day Stubborn stain removal Delicate or delux cleaning. Mending or alterations and Shoe or bag repairs.
                    The following items will take between 2 and 4 extra days Duvets,curtains and or carperts`,
                    style: 'section',
                },
            ],
            styles: {
                sectionHeader: {
                    bold: true,
                    fontSize: 14,
                    margin: [0, 15, 0, 15],
                },
                section: {
                    bold: true,
                    fontSize: 10,
                    margin: [0, 15, 0, 15],
                },
            },
            images: {
                logo: 'https://i.ibb.co/1Jn6H1k/dryclean-logo.png',
                snow: 'https://picsum.photos/seed/picsum/200/300',
            },
        };

        if (action === 'download') {
            pdfMake.createPdf(docDefinition).download();
        } else if (action === 'print') {
            pdfMake.createPdf(docDefinition).print();
        } else {
            pdfMake.createPdf(docDefinition).open();
        }
    }


    getBase64ImageFromURL(url: any) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.setAttribute('crossOrigin', 'anonymous');

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const dataURL = canvas.toDataURL('image/png');

                resolve(dataURL);
            };

            img.onerror = (error) => {
                reject(error);
            };

            img.src = url;
        });
    }
}
