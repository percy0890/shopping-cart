import { AppUser } from './../models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }


  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      phoneNo: user.phoneNumber,
      photoUrl: user.photoURL
    })
  }

  getAppUser(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
