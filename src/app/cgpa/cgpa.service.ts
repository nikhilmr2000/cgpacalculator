import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

interface Login{
  email:String,
  password:String
}

@Injectable({
  providedIn: 'root'
})
export class CgpaService {

  login:Login;

  constructor(private httpClient:HttpClient) { 
    this.login={} as Login;
  }

  postHttpData(gpaList:any){
    this.login=JSON.parse(sessionStorage.getItem('login')!);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.login.email + ':' + this.login.password) });
    return this.httpClient.post<any>("https://cgpa-calculator-production.up.railway.app/deptsemester/cgpa",gpaList,{headers});
  }
}
