import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  register:Register;
  semesterGPA:SemesterGPA[];
  selected:Boolean=true;

  constructor(private service:DashboardService,private router:Router){
    this.register={} as Register;
    this.semesterGPA=[];
  }
  ngOnInit(): void {
    this.getDashboardDetails();
  }

  getDashboardDetails(){
    this.service.getDashboardDetails().subscribe((data)=>{
      this.register=data;
      this.service.getListSemesterGPA(this.register.email).subscribe((data)=>{
        this.semesterGPA=data;
      });
    });
  }

  calculateGPA(){
    this.router.navigateByUrl("/calculateGPA");
  }

  calculateCGPA(){
    this.router.navigateByUrl("/calculateCGPA");
  }

}
