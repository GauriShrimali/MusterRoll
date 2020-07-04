import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.loginStatus$();
   }

  loginStatus$() {
    this.afAuth.authState
      .pipe(map(user => !!user))
      .subscribe(loggedIn => {
        loggedIn ? console.log('Logged in') : console.log('Logged out');
      });
  }

  async createAccount(email: string, password: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async signIn(email: string, password: string) {
    console.log('sign in');
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    return await this.afAuth.signOut();
  }

}
