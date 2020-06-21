import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  employeesColRef: AngularFirestoreCollection<any>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.employeesColRef = afs.collection<any>('Employees');
  }

  fetchAllEmployees(): Observable<any> {
    return this.employeesColRef.valueChanges();
  }

  addEmployee(employeeInfo: any) {
    this.afs.doc<any>('Employees/' + employeeInfo.id).set(employeeInfo);
  }

}
