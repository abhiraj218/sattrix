import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router:Router,
    public commonservice:CommonServiceService
  ) {}
  
  username:any;
  password:any;
  registerData = this.commonservice.registerData;
  login() {
    if(this.registerData.username == this.username &&
       this.registerData.password == this.password){
        this.router.navigate(['/dashboard']);
    }
    else if(this.registerData.username == ''){
      alert("No Record Found!! Please register");
      this.router.navigate(['/register']);
    }
    else {
      alert("Authntication Error");
      return
    }
  }

}
