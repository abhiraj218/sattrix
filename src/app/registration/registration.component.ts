import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { CommonServiceService } from '../common-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  data: any;
  constructor(private sessionStorageService: SessionStorageService,
    private router:Router,
    public commonservice:CommonServiceService
  ) {}
  registerData = this.commonservice.registerData;

  register() {
    debugger;
    if(this.registerData.password ==this.registerData.confirmPassword ){    
    console.log("registerData",this.registerData);
    this.sessionStorageService.store('username',this.registerData.username);    
    this.sessionStorageService.store('email', this.registerData.email);
    this.sessionStorageService.store('password', this.registerData.password);
    this.sessionStorageService.store('confirmPassword', this.registerData.confirmPassword);
    this.retrieveData();
   this.commonservice.registerData = this.registerData;
   alert("Registration Succesfully...");
    this.router.navigate(['/']);
  }
  else{
    alert("PassWord and Confirm Password Does Not Match!!");
  }
  }

  retrieveData() {
    this.data = this.sessionStorageService.retrieve('username');
    console.log("data",this.data);

  }
}