import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form3',
  templateUrl: './reactive-form3.component.html',
  styleUrls: ['./reactive-form3.component.css']
})
export class ReactiveForm3Component implements OnInit {
  schoolForms: FormGroup;
  schoolArray: FormArray;
  grade:number[];
  objData:any;
  formList=[];
  allData:any;
  count = 0;
  arrayOfObj = [];
  get controls(){
    return this.schoolForms.get('schoolArray')['controls'];
  }
  constructor(private formBuilder: FormBuilder) {
    this.arrayOfObj.push(this.count);
    this.display();
  }
  ngOnInit(): void {
    this.grade=[1,2,3];
    this.schoolForms = this.formBuilder.group({
      schoolArray: this.formBuilder.array([ this.createItem() ])
    });
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      section: ['',[Validators.required,Validators.maxLength(3)]],
      className: ['',[Validators.required,Validators.maxLength(40)]],
      grade: ['',[Validators.required]]
    });
  }
  addItem(): void {
    this.schoolArray = this.schoolForms.get('schoolArray') as FormArray;
    this.schoolArray.push(this.createItem());
    this.count ++;
    this.arrayOfObj.push(this.count);
  }
  submit(){
    // console.log(this.schoolForms.controls.schoolArray['controls']);
    // console.log(this.schoolForms.get('schoolArray')['controls'][i]['controls'].grade);
    this.forLoop();
    console.log(this.formList);
    this.reset();
  }

  deleteHobby(index){
    (<FormArray>this.schoolForms.get('schoolArray')).removeAt(index);
  }
  reset(){
    (<FormArray>this.schoolForms.get('schoolArray')).reset();
  }
  forLoop(){
    for (let i = 0; i < this.arrayOfObj.length; i++) {
    this.objData=this.schoolForms.get('schoolArray').value[i];
    this.localStorage();
    }
  }
    // loaclSotrage
  localStorage(){
    if ( localStorage.getItem("schoolForm") == null) {
      if (this.objData != undefined) {
          this.formList.push(this.objData);
      }
      localStorage.setItem("schoolForm",JSON.stringify(this.formList))
    }else{
      this.formList = JSON.parse(localStorage.getItem("schoolForm"));
    if (this.objData != undefined) {
        this.formList.push(this.objData);
    }
      localStorage.setItem("schoolForm",JSON.stringify(this.formList));
    }
    this.display();
  }
   // display data
   display(){
    this.allData=JSON.parse(localStorage.getItem("schoolForm"));
  }
}
