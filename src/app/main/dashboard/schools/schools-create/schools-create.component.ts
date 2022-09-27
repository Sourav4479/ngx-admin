import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schools-create',
  templateUrl: './schools-create.component.html',
  styleUrls: ['./schools-create.component.scss']
})
export class SchoolsCreateComponent implements OnInit {
  schoolCreateForm: FormGroup
  constructor(private fb: FormBuilder) { }
  managementDetailsInitialValue 
  adminDetailsInitialValue
  ngOnInit(): void {
    this.schoolCreateForm = new FormGroup({
      'username':new FormControl(null),
      'name':new FormControl(null),
      'address':new FormControl(null),
      'contactNumber':new FormControl(null),
      'email':new FormControl(null),
      'schoolLogo' : new FormControl('',[Validators.required]),
      'managementDetails': new FormArray([]),
      'adminDetails': new FormArray([])
    });
    this.managementDetailsInitialValue = this.schoolCreateForm.controls.managementDetails as FormArray;
    this.adminDetailsInitialValue = this.schoolCreateForm.controls.adminDetails as FormArray;
    this.managementDetailsInitialValue.push(this.fb.group({
      name:[''],
      phone:[''],
      email:['']
    }));
    this.adminDetailsInitialValue.push(this.fb.group({
      name:[''],
      phone:[''],
      email:['']
    }));
  }

  onSubmit(){
    console.log(this.schoolCreateForm.value);
    if (this.schoolCreateForm.invalid) {
      window.alert('All field are mandatory')
      return;
  }
  }
  onFormArrayAddNewRow(event,fieldName){
    if(fieldName == 'admin'){
      this.adminDetailsInitialValue.push(this.fb.group({
        name:'',
        phone:'',
        email:''
      }));
    }else{
      this.managementDetailsInitialValue.push(this.fb.group({
        name:'',
        phone:'',
        email:''
      }));
    }
    console.log(this.managementDetailsInitialValue.value)
  }
  public uploadSuccess(event): void {
    console.log(event);
  }
  onRemoveRow(id,name){
    if(name=='admin'){
      this.adminDetailsInitialValue.removeAt(id)
    }else{
      this.managementDetailsInitialValue.removeAt(id)
    }
  }
  get formarrayManagement()
  {
    return this.schoolCreateForm.get('managementDetails') as FormArray
  }
  get formarrayAdmin()
  {
    return this.schoolCreateForm.get('adminDetails') as FormArray
  }
}
