import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  registerData:any = {};
  tableData: any= [];
  dataLoaded: boolean = false;
  trackByIndex:any;
  constructor(
    private router:Router,
    public commonservice:CommonServiceService
  ){
    // debugger
    this.registerData = this.commonservice.dashBoardRegData;
    this.tableData = this.registerData.registerData;
    console.log("tableData",this.tableData);
    this.dataLoaded = true;
   }
   ngOninit(){

   }
   edit(data:any,i:any){
    debugger;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        orderData: JSON.stringify(data),
      },
    };
    this.router.navigate(['/dashboard'],navigationExtras);
   
   }
   delete(data:any,i:any){
    // debugger
    sessionStorage.clear();
    this.tableData = this.registerData.registerData;
    this.tableData.forEach((ele:any) => {
      if(ele.username == data.username){
        this.tableData.pop();
      }
      
    });
    alert("Data Deleted SuccedFully");

   }

}
