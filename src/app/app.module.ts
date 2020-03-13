import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule } from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ReaciveFormComponent } from './components/reacive-form/reacive-form.component';
import { ReaciveForm2Component } from './components/reacive-form2/reacive-form2.component';
import { ReactiveFormBtnComponent } from './components/reactive-form-btn/reactive-form-btn.component';
import { ReactiveForm3Component } from './components/reactive-form3/reactive-form3.component';
import { Reactiveformbtn2Component } from './components/reactiveformbtn2/reactiveformbtn2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
    ReaciveFormComponent,
    ReaciveForm2Component,
    ReactiveFormBtnComponent,
    ReactiveForm3Component,
    Reactiveformbtn2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
