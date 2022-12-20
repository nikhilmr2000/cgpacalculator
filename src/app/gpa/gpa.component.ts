import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GpaService } from './gpa.service';

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
  reg:Register,
  register:Register
}

interface Register{
  name:String,
  email:String,
  password:String,
  registernumber:String,
  contact:String
}

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit{

  semester:number;
  dept:String;
  semesters:number[]=[1,2,3,4,5,6,7,8];
  count:number[]=[];
  grade:number=0;
  gpa:boolean=false;
  correct:boolean=true;
  size:number=0;

  countVal:boolean=false;

  @Input()
  grades:String[];

  @Input()
  semesterGPA:SemesterGPA;

  subject:Subject[];
  
  constructor(private service:GpaService,private router:Router){
    this.semester=1;
    this.dept="CSE";
    this.subject=[];
    this.semesterGPA={} as SemesterGPA;
    this.grades=[];
    this.listOfDepartments();
  }

  ngOnInit(){
  }

  changeVal(event:number){
    this.grade=0;
    if(this.grade==0){
      this.gpa=false;
    }
    this.semester=event;
   // console.log(this.semester);
    this.listOfDepartments();
  } 

  changeRepeat(event:String){
    this.grade=0;
    if(this.grade==0){
      this.gpa=false;
    }
    this.dept=event;
    //console.log(this.dept);
    //console.log(this.semester);
    this.listOfDepartments();
  }

  listOfDepartments(){
    this.count=[];
    this.subject=[];
    this.grades=[];
    this.grade=0;
    if(this.grade!=0){
      this.gpa=true;
    }
    this.service.getCalculateGPA(this.dept,this.semester).subscribe((data)=>{
      this.subject=data;
      if(this.subject.length>0){
        console.log(this.subject.length);
        this.countVal=true;
      }
      for(let i=0;i<this.subject.length;i++){
        this.count[i]=i;
      }
     // console.log(this.subject);
    });
  }

  postDepartmentsList(){
    this.grade=0;
    this.size=0;
    //console.log(this.grades);


      if(this.grades.length!=this.subject.length){
        alert("Enter all grades Properly");
      }
      else{
        for(let i=0;i<this.grades.length;i++){
          if(this.grades[i]!='O' && this.grades[i]!='A+' && this.grades[i]!='A' && this.grades[i]!='B+' && this.grades[i]!='B' && this.grades[i]!='U'){
            alert("Incorrect Grades");
            break;
          }
          else{
            this.size++;
            //console.log(this.size);
          }
      }

      if(this.size==this.grades.length){
        console.log(this.correct);
        this.service.postCalculateGPA(this.dept,this.semester,this.grades).subscribe((data)=>{
          this.grade=data;
          if(this.grade!=0){
            this.gpa=true;
          }
          this.router.navigateByUrl("/calculateGPA");

          //console.log(data);
        });
      }
      }
    
  }

  putDepartmentSemesterData(){
    this.semesterGPA.gpa=this.grade;
    this.semesterGPA.semester=this.semester;
    this.service.getDashboardDetails().subscribe((data)=>{
      this.semesterGPA.reg=data;
     // console.log(this.semesterGPA.reg);
      this.service.putSemesterGPA(this.semesterGPA).subscribe((data)=>{
     // console.log(data);
      alert("GPA saved");
      location.reload();
    });
    });
  }

}
