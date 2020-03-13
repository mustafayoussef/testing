import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-btn',
  templateUrl: './reactive-form-btn.component.html',
  styleUrls: ['./reactive-form-btn.component.css']
})
export class ReactiveFormBtnComponent implements OnInit {

  Choices=[
    {name:"Cairo English School",id:1},
    {name:"British International",id:2},
    {name:"Saint George's College",id:3},
  ];
  select:string="";

  tmpo;
  count = 0;
  arrayOfObj = [];
  addClass(){
    this.tmpo=1;
    this.count ++;
    this.arrayOfObj.push(this.count);
  }

  selectValue(){
    console.log(this.select);

  }




  schoolForms = new FormGroup({

    section: new FormControl('',[Validators.required,Validators.maxLength(3)]),
    className: new FormControl('',[Validators.required,Validators.maxLength(40)]),
    Grade: new FormControl(''),
  });

  objData:any;
  formList=[];
  // errorSection:any='';
  saveForm(){
    console.log(this.schoolForms);

    this.objData={
      section:this.schoolForms.value.section,
      className:this.schoolForms.value.className,
      Grade:this.schoolForms.value.Grade,
    }


    if(localStorage.getItem("schoolForm") == null ){
      this.formList.push(this.objData)
      localStorage.setItem("schoolForm",JSON.stringify(this.formList))
  }else{
    this.formList = JSON.parse(localStorage.getItem("schoolForm"));
    this.formList.push(this.objData);
     localStorage.setItem("schoolForm",JSON.stringify(this.formList));
  }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
