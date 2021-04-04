import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _currentUser: User = new User("u1","Martin", "Pozniak", new Date(), "cap.pozniak@gmail.com", ['admin'], "Carol Stream");

  constructor() { }

  public getCurrentUser(){
    // Should return whole user object?
    return this._currentUser;
  }

  public isAdmin ( user: User ): boolean {
    return user.roles.includes('admin');
  }

}
