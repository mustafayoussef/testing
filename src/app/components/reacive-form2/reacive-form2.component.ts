import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reacive-form2',
  templateUrl: './reacive-form2.component.html',
  styleUrls: ['./reacive-form2.component.css']
})
export class ReaciveForm2Component implements OnInit {
  orderForm: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([ this.createItem() ])
    });
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  submit(){
    console.log(this.orderForm);

  }
  deleteHobby(index){
    (<FormArray>this.orderForm.get('items')).removeAt(index);
  }
}
