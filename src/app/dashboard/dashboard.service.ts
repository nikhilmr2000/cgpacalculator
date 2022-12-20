import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable ,OnInit} from '@angular/core';
import { Observable } from 'rxjs';

interface Register{
  name:String,
  email:String,
  password:String,
  registernumber:String,
  contact:String
}

interface SemesterGPA{
  semester:number,
  gpa:number,
  reg:Register
}

interface Login{
  email:String,
  password:String
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements OnInit{

  login:Login;

  constructor(private httpClient:HttpClient) { 
    this.login={} as Login;
  }

  ngOnInit(): void {
    
  }

  getDashboardDetails():Observable<Register>{
    this.login=JSON.parse(sessionStorage.getItem('login')!);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.login.email + ':' + this.login.password) });
    return this.httpClient.get<any>("https://cgpa-calculator-production.up.railway.app/dashboard",{headers});
  }

  getListSemesterGPA(email:String):Observable<any>{
    this.login=JSON.parse(sessionStorage.getItem('login')!);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.login.email + ':' + this.login.password) });
    return this.httpClient.get<any>("https://cgpa-calculator-production.up.railway.app/deptsemester/semesterGPA/"+email,{headers});
  }

}
