import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable , OnInit} from '@angular/core';
import { Observable } from 'rxjs';

interface Subject{
  name:String,
  coursecode:String,
  semester:number,
  credit:number,
  department:String
}

interface SemesterGPA{
  semester:number,
  gpa:number,
  reg:Register
}

interface Register{
  name:String,
  email:String,
  password:String,
  registernumber:String,
  contact:String
}

interface Login{
  email:String,
  password:String
}

@Injectable({
  providedIn: 'root'
})
export class GpaService implements OnInit{

 subject:Subject[];
 login:Login;


  constructor(private httpClient:HttpClient) { 
    this.subject=[];
    this.login={} as Login;
  }

  ngOnInit(): void {
    
  }

  getCalculateGPA(dept:String,sem:number):Observable<any>{
    this.login=JSON.parse(sessionStorage.getItem('login')!);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.login.email + ':' + this.login.password) });
    return this.httpClient.get<any>("https://cgpa-calculator-production.up.railway.app/deptsemester/"+dept+"/"+sem,{headers});
  }

  postCalculateGPA(dept:String,sem:number,grades:any){
    this.login=JSON.parse(sessionStorage.getItem('login')!);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.login.email + ':' + this.login.password) });
    return this.httpClient.post<any>("https://cgpa-calculator-production.up.railway.app/deptsemester/gpa/"+dept+"/"+sem,grades,{headers});
  }

  putSemesterGPA(semGPA:SemesterGPA):Observable<SemesterGPA>{
    this.login=JSON.parse(sessionStorage.getItem('login')!);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.login.email + ':' + this.login.password) });
    return this.httpClient.put<any>("https://cgpa-calculator-production.up.railway.app/deptsemester/saveupdateGPA",semGPA,{headers});
  }

  getDashboardDetails():Observable<Register>{
    this.login=JSON.parse(sessionStorage.getItem('login')!);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.login.email + ':' + this.login.password) });
    return this.httpClient.get<any>("https://cgpa-calculator-production.up.railway.app/dashboard",{headers});
  }

}
