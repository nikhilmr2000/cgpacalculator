import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable , OnInit} from '@angular/core';
import { Observable } from 'rxjs';

interface Login{
  email:String,
  password:String
}

interface Converter{
  value:number
}

@Injectable({
  providedIn: 'root'
})
export class ConverterService implements OnInit{

  login:Login;

  constructor(private httpClient:HttpClient) { 

    this.login={} as Login; 

  }

  ngOnInit(): void {
    
  }

  converterPercentage(converter:Converter):Observable<any>{
    this.login=JSON.parse(sessionStorage.getItem('login')!);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.login.email + ':' + this.login.password) })
    return this.httpClient.post<any>("https://cgpa-calculator-production.up.railway.app/deptsemester/converter",converter,{headers});
  }

}
