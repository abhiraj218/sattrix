import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }
  // registerData = {};
  registerData={
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    phone:'',
    city:''
    }

    dashBoardRegData:any = {
      registerData : [],
      };
}
