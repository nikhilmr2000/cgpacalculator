import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgpaComponent } from './cgpa/cgpa.component';
import { ConverterComponent } from './converter/converter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GpaComponent } from './gpa/gpa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'calculateGPA',component:GpaComponent},
  {path:'calculateCGPA',component:CgpaComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'percentageConverter',component:ConverterComponent},
  {path:'subject',component:SubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
