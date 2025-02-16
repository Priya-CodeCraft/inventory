import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent{
  public employeeForm: FormGroup;

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar) {
    this.employeeForm = this.fb.group({
      tableRows: this.fb.array([],[Validators.required])
    });
    this.addRow();
  }
  durationInSeconds = 5;  
  
  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 250,
    });
  }

  createFormGroup(): FormGroup {
    return this.fb.group({
      suppliername: ['',[Validators.required,Validators.minLength(3)]],      
      Date: [''],
      DeliveryDate: ['']
    });
  }

  get getFormControls() {
    const control = this.employeeForm.get('tableRows') as FormArray;
    return control;
  }

  addRow() {
    const control =  this.employeeForm.get('tableRows') as FormArray;
    control.push(this.createFormGroup());
  }

  checkAll(checkVal: boolean) {
    
    this.getFormControls.controls.forEach(formGroup => {
      formGroup.get('ischecked')?.setValue(checkVal);
    });
  }  

  removeEmployee(index:number) {
    const control =  this.employeeForm.get('tableRows') as FormArray;
    control.removeAt(index);
  }

}


