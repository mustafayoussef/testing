import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reacive-form',
  templateUrl: './reacive-form.component.html',
  styleUrls: ['./reacive-form.component.css']
})
export class ReaciveFormComponent implements OnInit {

  userForm:FormGroup;
  get name(){
  return this.userForm.get('name');
  }
  get hobbbies(){
    return this.userForm.get('hobbies')
  }
  constructor() { }

  ngOnInit(): void {
    this.userForm= new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3)]),
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl(''),
      address: new FormGroup({
        street:new FormControl(''),
        suite: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl(''),
        geo: new FormGroup({
          lat: new FormControl(''),
          lng: new FormControl(''),
        })
      }),
      company:new FormGroup({
        name: new FormControl(''),
        catchPhrase: new FormControl(''),
        bs: new FormControl(''),
      }),
      hobbies: new FormArray([])
    });
  }
  addHobby(){
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''));
  }
  deleteHobby(index){
    (<FormArray>this.userForm.get('hobbies')).removeAt(index);
  }
  submit(){
    console.log(this.userForm);
    this.clearForm();
  }
  clearForm(){
    this.userForm.reset();
  }
}
