import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private adminAuth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.adminAuth.user$
    .switchMap(user => {
      // here user is the user object represented by firebase as part of authentication, 
      // its not the user object that we store in the database i.e. AppUser..
      return this.userService.getAppUser(user.uid);
    })
    .map(appUser => appUser.isAdmin) // here we are getting the user object from firebase db
      
  }

}
