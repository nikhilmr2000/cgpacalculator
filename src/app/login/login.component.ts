import { Component , Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

interface Login{
  email:String,
  password:String
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  @Input()
  public login:Login;

  constructor(private service:LoginService,private router:Router){
    this.login={} as Login;
  } 
  
  ngOnInit(): void {
    
  }

  getLoginDetails(){
    this.service.loginStatus(this.login).subscribe((data)=>{
        this.router.navigateByUrl("/dashboard");
        alert("Hello " + data.name);
      //console.log(data);
    })
  }

  linkbutton(){
    this.router.navigateByUrl("/register");
  }

}
