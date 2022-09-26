import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  sideBarOpen = true;
  
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
