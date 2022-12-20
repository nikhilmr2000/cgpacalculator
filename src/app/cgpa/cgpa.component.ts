import { Component ,Input,OnInit} from '@angular/core';
import { CgpaService } from './cgpa.service';

@Component({
  selector: 'app-cgpa',
  templateUrl: './cgpa.component.html',
  styleUrls: ['./cgpa.component.scss']
})
export class CgpaComponent implements OnInit{

  @Input()
  listGpa:String[];
  semester:number;
  cgpa:number;
  cgpaBool:boolean=false;

  count:number[]=[];
  countVal:boolean=false;

  constructor(private service:CgpaService){
    this.listGpa=[];
    this.semester=0;
    this.cgpa=0;
  }

  ngOnInit(): void {
    
  }

  listOfCGPA(){
    this.service.postHttpData(this.listGpa).subscribe((data)=>{
      this.cgpa=data;
      if(this.cgpa!=0){
        this.cgpaBool=true;
      }
    });
  }

  changeVal(event:number){
    this.count=[];
    this.listGpa=[];
    this.countVal=true;
    this.semester=event;
    for(let i=0;i<this.semester;i++){
      this.count[i]=i;
    }
    //console.log(this.semester);
  }


}
