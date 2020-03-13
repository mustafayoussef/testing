import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ReaciveFormComponent } from './components/reacive-form/reacive-form.component';
import { ReaciveForm2Component } from './components/reacive-form2/reacive-form2.component';
import { ReactiveFormBtnComponent } from './components/reactive-form-btn/reactive-form-btn.component';
import { ReactiveForm3Component } from './components/reactive-form3/reactive-form3.component';
import { Reactiveformbtn2Component } from './components/reactiveformbtn2/reactiveformbtn2.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'form',component:FormComponent},
  {path:'reactiveform',component:ReaciveFormComponent},
  {path:'reactiveform2',component:ReaciveForm2Component},
  {path:'reactiveform3',component:ReactiveForm3Component},
  {path:'reactiveformbtn',component:ReactiveFormBtnComponent},
  {path:'reactiveformbtn2',component:Reactiveformbtn2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
