import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

interface Register{
  name:String,
  email:String,
  password:String,
  registernumber:String,
  contact:String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  val:boolean=false;
  register:Register;

  constructor(private router:Router,private service:HomeService){
    this.register={} as Register;
  }

  ngOnInit(): void {
    this.service.getDashboardDetails().subscribe((data)=>{
      this.register=data;
      if(this.register.email!=null){
        this.val=true;
      }
    });
  }

  calculateGPA(){
    if(this.val==true){
      this.router.navigateByUrl("/calculateGPA");
    }
    else{
      this.router.navigateByUrl("/login");
    }
    
  }

  calculateCGPA(){
    if(this.val==true){
      this.router.navigateByUrl("/calculateCGPA");
    }
    else{
      this.router.navigateByUrl("/login");
    }
  }

}
