import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import jsPDFfrom, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html',
  styleUrls: ['./monthly-sales.component.css']
})
export class MonthlySalesComponent{

  barChartOptions : ChartOptions = {
    responsive: true
  }
  
  barChartLabels: BaseChartDirective["labels"] = ['January', 'February', 'March', 'April', 'May', 'June'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins: any = [];
  
  barChartData : ChartDataset[] = [
    { data: [48000, 60000, 32000, 55000, 40000, 50000], label: 'Total Amount (R)'},
  ]
  
  // PDF Options
  public openPDF(){
    let Data = document.getElementById('MonthlySales')!;
  
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
      PDF.save('MonthlySales.pdf');
    }
  
    )
  }
  
 
  constructor() { }

  ngOnInit(): void {
  }

}
