import { Component,Input,OnInit } from '@angular/core';
import { window } from 'rxjs';
import { SubjectService } from './subject.service';

interface Subject{
  name:String,
  coursecode:String,
  semester:number,
  credit:number,
  department:String
}
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit{

  @Input()
  public subject:Subject;

  constructor(private service:SubjectService){
    this.subject={} as Subject;
  }

  ngOnInit(): void {
    
  }

  postDetailsOfSubject(){
    this.service.postSubjectDetails(this.subject).subscribe((data)=>{
      //console.log(data);
      location.reload();
      
    });
  }
}
