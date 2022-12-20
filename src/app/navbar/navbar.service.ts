import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

interface Login{
  email:String,
  password:String
}
interface Register{
  name:String,
  email:String,
  password:String,
  registernumber:String,
  contact:String
}
@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  @Input()
  login:Login;
  constructor(private httpClient:HttpClient) { 
    this.login={} as Login;
  }

  getDashboardDetails():Observable<Register>{
    this.login=JSON.parse(sessionStorage.getItem('login')!);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.login.email + ':' + this.login.password) });
    return this.httpClient.get<any>("https://cgpa-calculator-production.up.railway.app/dashboard",{headers});
  }

}
