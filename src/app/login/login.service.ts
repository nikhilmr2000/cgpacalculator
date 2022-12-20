import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface Login{
  email:String,
  password:String
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }


  loginStatus(login:Login):Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(login.email + ':' + login.password) });
    sessionStorage.setItem('login',JSON.stringify(login));
    return this.httpClient.get<any>("https://cgpa-calculator-production.up.railway.app/dashboard",{headers});
  }

}
