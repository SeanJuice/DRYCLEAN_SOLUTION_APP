import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-daily-cash-up',
  templateUrl: './daily-cash-up.component.html',
  styleUrls: ['./daily-cash-up.component.css']
})
export class DailyCashUpComponent implements OnInit {
  // PDF Options
  public openPDF(){
    let Data = document.getElementById('DailyCashUp')!;
  
    html2canvas(Data).then(canvas => {
      let fileWidth = 210;
      let fileHeight = canvas.height * fileWidth / canvas.width;
  
      const contentDataUrl = canvas.toDataURL('image/png');
  
      let PDF = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4'
      });
  
      let topPosition = 10;
      let leftPosition = 0;
  
      PDF.addImage(contentDataUrl, 'PNG', leftPosition, topPosition, fileWidth, fileHeight);
      PDF.save('DailyCashUp.pdf');
    }
  
    )
  }

  constructor() { }

  ngOnInit(): void {
  }

}
