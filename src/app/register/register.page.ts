import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm : FormGroup;
  isSubmitted = false;
  defaultDate = new Date();
  userData : any;
  
  constructor(
    public formBuilder : FormBuilder,
    private storage: Storage
  ) { }

  async ngOnInit() {
    await this.storage.create();
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      gender: ['', Validators.required],
    })
    this.getData();
    if(this.userData != null){
      this.registerForm.get("firstName").setValue(this.userData.firstName);
      this.registerForm.get("lastName").setValue(this.userData.lastName);
      this.registerForm.get("email").setValue(this.userData.email);
      this.registerForm.get("dob").setValue(this.userData.dob);
      this.registerForm.get("mobile").setValue(this.userData.mobile);
      this.registerForm.get("gender").setValue(this.userData.gender);
    }
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.registerForm.get('dob').setValue(date, {
       onlyself: true
    })
 }

 get errorControl() {
  return this.registerForm.controls;
}

 submitForm() {
  this.isSubmitted = true;
  if (!this.registerForm.valid) {
    console.log('Please provide all the required values!')
    return false;
  } else {
    this.saveData();
    console.log(this.registerForm.value)
  }
}

 async saveData(){
   await this.storage.set("user", this.registerForm.value);
 }

 async getData(){
   this.userData=await this.storage.get("user");
 }

}
