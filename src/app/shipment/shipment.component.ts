import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  addressForm:FormGroup|any;

  textBoxDisabled = true;

  type:any;
  regForm: FormGroup | any;
  submitted = false;
  Service: any = ['627 127', '00000', '00501', '10020']
  arrservice: any;
  constructor( private router: Router,public formBuilder: FormBuilder, private http:HttpClient )  { }

  ngOnInit(){
  
  this.regForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
   email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
   phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
   type: ['', [Validators.required]],
   postelcode:['',[Validators.required]],

  address:this.formBuilder.group({
street:['',[Validators.required]],
city:['',[Validators.required]],
state:['',[Validators.required]]

 })
})

 
this.regForm.patchValue({ 
  
  name:"jaisha",
  password:'jaisha12',
  email:"jai@gmail.com",
  phone:8765454323,
 
  postelcode:'627127',
Gender:'female',

  address:{city:"kknager",state:"tamilnadu" }
  


});


}
get errorCtr() {  
  
  return this.regForm.controls;
}

onSubmit(){
this.submitted=true
var street=this.regForm.get("address").get("street").value;
 
console.log("Login successful");console.log(street);
if(this.regForm.invalid){
  console.log('invalid')
}
else{
  console.log(this.regForm.value);
  
  
}

}
check(e:any){

}
}

