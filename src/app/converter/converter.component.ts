import { Component ,Input,OnInit} from '@angular/core';
import { ConverterService } from './converter.service';

interface Converter{
  value:number
}


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit{

  @Input()
 converter:Converter;

  newVal:number=0;
  boolVal:boolean=false;

  constructor(private service:ConverterService){
    this.converter={} as Converter;
  }

  ngOnInit(): void {
    //console.log(this.val);
  }

  buttonPress(){
    console.log(this.converter);
    this.service.converterPercentage(this.converter).subscribe((data)=>{
      this.boolVal=true;
      //console.log(data);
      this.newVal=data;
      //console.log(this.newVal);
    });
  }
}
