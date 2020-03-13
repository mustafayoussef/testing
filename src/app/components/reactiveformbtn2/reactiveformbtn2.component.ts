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
  updateSchoolForm: FormGroup;
  grade:number[];
  objData:any;
  formList=[];
  allData:any;
  count = 0;
  arrayOfObj = [];
  get controls(){
    return this.schoolForms.get('schoolArray')['controls'];
  }
  // get updateForm(){
  //   return this.oldData.get('schoolArray')['controls'];
  // }
  Choices=[
    {name:"Cairo English School",id:1},
    {name:"British International",id:2},
    {name:"Saint George's College",id:3},
  ];
  select:string="";
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
   this.allData.splice(i,1)
   localStorage.setItem("schoolForm",JSON.stringify(this.allData));
  }

  newData:any;
  newSection:any;
  oldValue:any;
  curruntLenght:any;
  curruntData:any;
  curruntSchool:any;
  updateData:any;
  updateSelect:string;


  edit(data , length){
    this.curruntLenght = length;
    this.curruntData = data;
    this.curruntSchool = this.allData[length].school;

    // console.log(this.curruntSchool);



    this.updateData =new FormGroup({
      section: new FormControl(this.curruntData.section,[Validators.required,Validators.maxLength(3)]),
      className: new FormControl(this.curruntData.className,[Validators.required,Validators.maxLength(40)]),
      grade: new FormControl(this.curruntData.section,[Validators.required]),
      school: new FormControl(this.curruntData.school),
    });

    // console.log(this.updateSelect);
    console.log(this.updateData);



    console.log(data);
    // console.log(this.curruntData.section);


    // this.updateData = this.formBuilder.group({
    //   section: [data.section,[Validators.required,Validators.maxLength(3)]],
    //   className: [data.className,[Validators.required,Validators.maxLength(40)]],
    //   grade: [data.grade,[Validators.required]],
    //   school: [data.school],
    // });
    // this.oldValue=this.updateData.value;


  }

  updateBtn(){
    // this.up();
    this.schoolArray = this.schoolForms.get('schoolArray') as FormArray;
    this.schoolArray.push(this.updateData);


    // this.updateData.push({school: new FormControl(this.updateSelect)});
    console.log(this.updateData);
    console.log(this.updateSelect);
    console.log(this.updateData.value);
    console.log(this.curruntLenght);
    this.allData.splice(this.curruntLenght,1,this.updateData.value);
    console.log(this.allData);

    // console.log(this.updateData.value.section);


    // this.newData = {
    //   section: "",
    //   className: "helloClassName",
    //   grade: 123,
    //   school: "helloSchool",
    // };
      // console.log(this.newData);
    // this.allData.splice(this.curruntLenght,1,this.newData);
    // console.log(this.allData);

    // console.log(this.newSection);






    // console.log(this.updateValue);
    // console.log(this.newData);
    // console.log(this.schoolForms);
  }


}
