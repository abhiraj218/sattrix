import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit  {
  isSidenavOpen = false;
  registerData={
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    phone:'',
    city:''
    }
  data: any = [];
  fromEdit: boolean = false;
  
  constructor(private router:Router,
    private sessionStorageService: SessionStorageService,
    public commonservice:CommonServiceService,
     private route: ActivatedRoute
  ){
    // this.registerData = this.commonservice.registerData;
  //  this.data = this.router.getCurrentNavigation().extras.state.example;
      
  this.route.queryParams.subscribe(params => {
    // debugger
    if (params['orderData'] != null || params['orderData'] != undefined) {      
      this.data = JSON.parse(params['orderData']);  
      this.registerData = this.data ;
      this.fromEdit = true;
    }
  });

   }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  redirectRegister(){
    this.router.navigate(['/registration']);
  }
  redirectList(){
    this.router.navigate(['/list']);
  }

  register() {
    debugger;
    console.log("registerData",this.registerData);
    this.sessionStorageService.store('username',this.registerData.username);    
    this.sessionStorageService.store('email', this.registerData.email);
    this.sessionStorageService.store('phone', this.registerData.phone);
    this.sessionStorageService.store('city', this.registerData.city);
    // this.retrieveData();
    // this.commonservice.registerData = this.registerData;
    this.commonservice.dashBoardRegData.registerData.push(this.registerData)


    alert("Registration Succesfully...");
    this.router.navigate(['/list']);
    
  }


}
