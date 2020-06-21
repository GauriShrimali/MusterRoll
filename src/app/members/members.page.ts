import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/data/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  departmentList: string[] = ['IT', 'HR', 'RESOURCE'];
  designationList: string[] = ['QA', 'Manager', 'Accountant', 'Receptionist'];
  employees: Observable<any>;

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.employees = this.firestoreService.fetchAllEmployees();
  }

}
