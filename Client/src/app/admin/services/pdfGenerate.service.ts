/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({
    providedIn: 'root',
})
export class PdfGenerateService {
    constructor() {}

    async generatePDF(action = 'open', tableData: any, GeneralData: any) {
       // 
        const docDefinition: TDocumentDefinitions = {
            content: [
                {
                    image: 'logo',
                    fit: [100, 100],
                    style: 'sectionHeader',
                },
                {
                    text: 'SOLID BEGINNINGS JUNIOR SCHOOL',
                    fontSize: 16,
                    bold: true,
                    style: 'sectionHeader',
                },
                {
                    text: GeneralData.ListType + ' CLASS REPORT',
                    fontSize: 12,
                    style: 'sectionHeader',
                },
                {
                    text: 'Details',
                    style: 'sectionHeader',
                },
                {
                    columns: [
                        [
                            {
                                text: `Date: ${GeneralData.Date}`,
                                bold: true,
                            },
                            { text: `Grade: ${GeneralData.Grade}` },
                            // { text: `Teacher: ${GeneralData.Teacher}` },
                            { text: `Teacher: ${GeneralData.Teacher}`},

                        ],
                        [
                            {
                                text: `Date Generated: ${new Date().toLocaleString()}`,
                                alignment: 'right',
                            },
                            {
                                text: `Report No : ${(
                                    Math.random() * 1000
                                ).toFixed(0)}`,
                                alignment: 'right',
                            },
                        ],
                    ],
                },
                {
                    text: 'Pupils',
                    style: 'sectionHeader',
                },
                {
                    table: {
                        headerRows: 1,
                        heights:[60],
                        widths: ['auto', 'auto', 'auto', 'auto', 'auto'],
                        body: [
                            [
                                {
                                    text: 'First Name',
                                    fillColor: 'navy',
                                    color: 'white',
                                },
                                {
                                    text: 'Last Name',
                                    fillColor: 'navy',
                                    color: 'white',
                                },
                                {
                                    text: '      ',
                                    fillColor: 'navy',
                                    color: 'white',
                                },
                                {
                                    text: '      ',
                                    fillColor: 'navy',
                                    color: 'white',
                                },
                                {
                                    text: '     ',
                                    fillColor: 'navy',
                                    color: 'white',
                                },
                            ],
                            ...tableData.map((p) => [
                                p.Name,
                                p.Surname,
                                p.EMPTYCOL1,
                                p.EMPTYCOL2,
                                p.EMPTYCOL3,
                            ]),
                        ],
                    },
                    layout: {
                        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                        fillColor: function(rowIndex, _node) {
                            return rowIndex % 2 === 0 ? '#ADD8E6' : null;
                        },
                    },
                },
            ],
            styles: {
                sectionHeader: {
                    bold: true,
                    decoration: 'underline',
                    fontSize: 14,
                    margin: [0, 15, 0, 15],
                },
            },
            images: {
                logo: 'https://i.ibb.co/xjh1gBB/school-logo.jpg',
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

    async generateSalesReport(action = 'open', tableData: any, GeneralData: any) {
        
        const docDefinition: TDocumentDefinitions = {
            content: [
                {
                    image: 'logo',
                    fit: [100, 100],
                    style: 'sectionHeader',
                },
                {
                    text: 'SOLID BEGINNINGS JUNIOR SCHOOL',
                    fontSize: 16,
                    style: 'sectionHeader',
                },
                {
                    text: 'SALES REPORT',
                    fontSize: 20,
                    bold: true,
                    style: 'sectionHeader',
                    decoration: 'underline',
                },
                // {
                //     image:await GeneralData.image,
                //     fit: [100, 100],
                //     alignment: 'center',
                // },
                {
                    text: 'Details',
                    style: 'sectionHeader',
                },
                {
                    columns: [
                        [
                            {
                                text: `Date Range: ${GeneralData.date}`,
                                bold: true,
                            },
                            { text: `${GeneralData.address}` },
                            { text: `${GeneralData.email}` },
                            { text: `${GeneralData.phone}` },
                        ],
                        [
                            {
                                text: `Date Generated: ${new Date().toLocaleString()}`,
                                alignment: 'right',
                            },
                            {
                                text: `Report No : ${(
                                    Math.random() * 1000
                                ).toFixed(0)}`,
                                alignment: 'right',
                            },
                        ],
                    ],
                },
                {
                    text: 'Sales',
                    style: 'sectionHeader',
                },
                {
                    table: {
                        headerRows: 1,
                        heights:[50],
                        widths: ['*', '*','*','*','*','*'],
                        body: [
                            [
                                {
                                    text: 'Date',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,
                                },
                                {
                                    text: 'Product Name',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,

                                },                                {
                                    text: 'Category',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,
                                },
                                {
                                    text: 'Quantity ',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,

                                },                                {
                                    text: 'Price',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,
                                },
                                {
                                    text: 'Total',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,

                                },
                            ],
                            ...tableData.map((p) => [
                                p.date,
                                p.Name,
                                p.Type,
                                p.count,
                                p.Cost,
                                p.Total
                            ]),
                        ],
                    },
                    layout: {
                        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                        fillColor: function(rowIndex, _node) {
                            return rowIndex % 2 === 0 ? '#ADD8E6' : null;
                        },
                    },
                },
            ],
            styles: {
                sectionHeader: {
                    bold: true,
                    decoration: 'underline',
                    fontSize: 14,
                    margin: [0, 15, 0, 15],
                },
            },
            images: {
                logo: 'https://i.ibb.co/xjh1gBB/school-logo.jpg',
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

    async generateStocktakeReport(action = 'open', tableData: any, GeneralData: any) {
        const docDefinition: TDocumentDefinitions = {
            content: [
                {
                    image: 'logo',
                    fit: [100, 100],
                    style: 'sectionHeader',
                },
                {
                    text: 'SOLID BEGINNINGS JUNIOR SCHOOL',
                    fontSize: 16,
                    style: 'sectionHeader',
                },
                {
                    text: 'STOCKTAKE REPORT',
                    fontSize: 20,
                    bold: true,
                    style: 'sectionHeader',
                    decoration: 'underline',
                },
                // {
                //     image:await GeneralData.image,
                //     fit: [100, 100],
                //     alignment: 'center',
                // },
                {
                    text: 'Details',
                    style: 'sectionHeader',
                },
                {
                    columns: [
                        [
                            {
                                text: `Date Range: ${GeneralData.date}`,
                                bold: true,
                            },
                            { text: `${GeneralData.address}` },
                            { text: `${GeneralData.email}` },
                            { text: `${GeneralData.phone}` },
                        ],
                        [
                            {
                                text: `Date Generated: ${new Date().toLocaleString()}`,
                                alignment: 'right',
                            },
                            {
                                text: `Report No : ${(
                                    Math.random() * 1000
                                ).toFixed(0)}`,
                                alignment: 'right',
                            },
                        ],
                    ],
                },
                {
                    text: 'Stocktake',
                    style: 'sectionHeader',
                },
                {
                    table: {
                        headerRows: 1,
                        heights:[50],
                        widths: ['*', '*','*','*','*','*', '*'],
                        body: [
                            [
                                {
                                    text: 'Date',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,
                                },
                                {
                                    text: 'Product Name',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,

                                },                                {
                                    text: 'Product Type',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,
                                },
                                {
                                    text: 'Staff member ',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,

                                },  
                                {
                                    text: 'Previous Quantity ',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,

                                },   
                                {
                                    text: 'Status ',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,

                                },                               {
                                    text: 'Revised Quantity',
                                    fillColor: 'navy',
                                    color: 'white',
                                    bold: true,
                                }
                            ],
                            ...tableData.map((p) => [
                                p.date,
                                p.name,
                                p.Product_type,
                                p.staffmember,
                                p.current_quantity,
                                p.Status,
                                p.revised_quantity
                                
                            ]),
                        ],
                    },
                    layout: {
                        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                        fillColor: function(rowIndex, _node) {
                            return rowIndex % 2 === 0 ? '#ADD8E6' : null;
                        },
                    },
                },
            ],
            styles: {
                sectionHeader: {
                    bold: true,
                    decoration: 'underline',
                    fontSize: 14,
                    margin: [0, 15, 0, 15],
                },
            },
            images: {
                logo: 'https://i.ibb.co/xjh1gBB/school-logo.jpg',
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

    getBase64ImageFromURL(url) {
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
