import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {

  public employeeInfo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firestoreService: FirestoreService
    ) { }

  ngOnInit() {
    this.employeeInfo = this.formBuilder.group({
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
    this.firestoreService.addEmployee(this.employeeInfo.value);
  }

}
