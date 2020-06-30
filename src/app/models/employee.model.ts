import { User } from './user.model';
import { Time } from '@angular/common';

export class Employee extends User {
    shift: string;
    shitTime: string;
    salary: number;
    perUnitTime: string;
    inTime: string;
    outTime: string;
    amount: number;
    duration: number;
    status: string;
}

export const shift = ['morning', 'afternoon', 'evening', 'night'];
export const status = ['P', 'A', 'LC', 'EL'];
