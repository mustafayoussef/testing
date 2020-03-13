import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveformbtn2',
  templateUrl: './reactiveformbtn2.component.html',
  styleUrls: ['./reactiveformbtn2.component.css']
})
export class Reactiveformbtn2Component implements OnInit {
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
  Choices=[
    {name:"Cairo English School",id:1},
    {name:"British International",id:2},
    {name:"Saint George's College",id:3},
  ];
  select:string="";
  constructor(private formBuilder: FormBuilder) {
    console.log(this.select);
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
      grade: ['',[Validators.required]],
      school: [this.select],
    });
  }
  addItem(): void {
    this.schoolArray = this.schoolForms.get('schoolArray') as FormArray;
    this.schoolArray.push(this.createItem());
    this.count ++;
    this.arrayOfObj.push(this.count);
  }
  submit(){
    this.forLoop();
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
      this.objData.school=this.select;
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


  deleteClass(i){
console.log(this.allData[i]);

    // console.log(this.allData.splice(this.allData,this.allData[i]));
    console.log(localStorage.removeItem(this.allData[i]));
    for (let index = 0; index < this.allData.length; index++) {
      // console.log(this.allData[[index] [i]]);


    }
    // console.log(this.allData[i]);
    // this.allData.splice(this.allData[i],-1)
    // localStorage.setItem("schoolForm",JSON.stringify(this.allData));
    // this.display();
    // localStorage.removeItem(this.allData[i]);
    // this.allData=JSON.parse(localStorage.getItem("schoolForm"));
    // for (let i = 0; i < this.allData.length; i++) {
      //   if (this.allData[i] == url) {
        //     console.log("as");

        //       this.allData.splice(i,1);
        //   }

        // }
        // console.log(i);
        // for (let index = 0; index < this.allData.length; index++) {
      // if(this.allData[index].url == url){
      //   console.log(url);

      // }


    // }
    // console.log(



    // );


  }

  edit(i){
    alert(i);
  }







}
