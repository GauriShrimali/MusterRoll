import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  departmentList: string[] = ['IT', 'HR', 'RESOURCE'];
  designationList: string[] = ['QA', 'Manager', 'Accountant', 'Receptionist'];
  constructor() { }

  ngOnInit() {
  }

}
