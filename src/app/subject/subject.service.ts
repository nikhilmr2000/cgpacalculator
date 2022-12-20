import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Subject{
  name:String,
  coursecode:String,
  semester:number,
  credit:number,
  department:String
}
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  constructor(private httpClient:HttpClient) { }

  postSubjectDetails(subject:Subject):Observable<Subject>{
    return this.httpClient.post<any>("https://cgpa-calculator-production.up.railway.app/subject",subject);
  }
}
