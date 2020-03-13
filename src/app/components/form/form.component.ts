import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray , FormControl ,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  // userForm:FormGroup;

  communicationMode:string[];
  genders:string[];
  constructor() { }

  ngOnInit(): void {
    // this.userForm =new FormGroup({
    //   hobbies: new FormArray([])
    // })
    this.genders=['Male','Female'];
    this.communicationMode=['Phone','Email']
  }


  // addHobby(){
  //   (<FormArray> this.userForm.get('hobbies')).push(new FormControl('',[Validators.required]));
  // }
  submit(userForm){
  console.log(
    'Form Submitted!', userForm
  );

  }
}
