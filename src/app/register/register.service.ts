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

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit{

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    
  }

  postRegisterService(register:Register):Observable<Register>{
    return this.httpClient.post<any>("https://cgpa-calculator-production.up.railway.app/register",register);
  }

}
