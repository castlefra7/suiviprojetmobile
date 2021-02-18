import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor() {
    let currUsr = new User();
    currUsr.name = "babakoto";
    this.setUser(currUsr);
  }

  getUser() {
    return this.user;
  }

  setUser(_user: User) {
    this.user = _user;
  }
}
