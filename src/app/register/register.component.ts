import { Component ,Input,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

interface Register{
  id:number,
  name:String,
  email:String,
  password:String,
  registernumber:String,
  contact:String
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  @Input()
  public register:Register;
  constructor(private service: RegisterService,private router:Router){
    this.register={} as Register;
  }

  ngOnInit(): void {
    
  }

  postRegisterService(){
      this.service.postRegisterService(this.register).subscribe((data)=>{
        if(data.email==null){
          alert("Email already registered or Please Enter Valid Details");
        }
        else{
          //console.log(data);
        this.router.navigateByUrl("/login");
        }
        
      });
    }
    
}
