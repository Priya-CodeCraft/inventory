import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(uname: string, pword: string){
    if(uname === 'intern@2025' && pword ==='2025'){
      return 200;
    }else{
      return 300;
    }
  }
}
