import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {

  public attendeeInfo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.attendeeInfo = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      shift: ['', Validators.required],
      shiftTime: ['', Validators.required]
    });
  }

  addEmployee() {
    console.log('add employee');
  }

}
