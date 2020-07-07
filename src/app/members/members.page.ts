import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberService } from '../services/member.service';
import { ModalController } from '@ionic/angular';
import { FilterModalPage } from '../filter-modal/filter-modal.page';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  employees = [
    {
      code: '1001', name: 'drashti', gender: 'Female',
      salary: 55500
    },
    {
      code: '1002', name: 'namrata', gender: 'Female',
      salary: 57000
    },
    {
      code: '1003', name: 'shreeja', gender: 'Female',
      salary: 59000
    },
    {
      code: '1004', name: 'shreenil', gender: 'Male',
      salary: 65000
    }
  ];

  members: Observable<any>;
  filteredDept: string;
  filteredDes: string;

  constructor(
    private memberService: MemberService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.members = this.memberService.fetchAllMembers$();
  }

  getEmployees(): void {
    console.log('date now: ', Date.now());
    this.employees = [
      {
        code: '1001', name: 'drashti', gender: 'Female',
        salary: 55500
      },
      {
        code: '1002', name: 'namrata', gender: 'Female',
        salary: 57000
      },
      {
        code: '1003', name: 'shreeja', gender: 'Female',
        salary: 59000
      },
      {
        code: '1004', name: 'shreenil', gender: 'Male',
        salary: 65000
      },
      {
        code: '1005', name: 'tejas', gender: 'Male',
        salary: 67000
      }
    ];
  }

  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }

  async openFilterModal() {
    const filterModal = await this.modalCtrl.create({
      component: FilterModalPage
    });
    await filterModal.present();
    filterModal.onDidDismiss()
      .then(filterData => {
        if (filterData.data) {
          this.filteredDept = filterData.data.filteredDept;
          this.filteredDes = filterData.data.filteredDes;
        }
      })
      .catch(err => console.log('onDidDismiss error: ', err));
  }

}
