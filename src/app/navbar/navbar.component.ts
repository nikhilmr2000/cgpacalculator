import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Login{
  email:String,
  password:String
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  
  login:Login;
  val:boolean=false;



  constructor(private router:Router){
    this.login={} as Login;
  }

  ngOnInit(): void {
    this.login=JSON.parse(sessionStorage.getItem('login')!); 
    if(this.login!=null){
      this.val=true;
    }
  }

  logoutButton(){
    sessionStorage.clear();
    this.router.navigateByUrl("/").then(()=>{
      location.reload();
    });
  }

 

}
