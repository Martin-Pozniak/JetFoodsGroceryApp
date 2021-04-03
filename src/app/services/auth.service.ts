import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated: boolean = false;
  private _user: User;

  constructor( private svcUser: UserService,
               private router: Router ) { }

  public userIsAuthenticated(): boolean {
    return this._userIsAuthenticated;
  }

  public login(){
    this._userIsAuthenticated = true;
  }

  public logout(){
    this._userIsAuthenticated = false;
    this.router.navigateByUrl("/auth");
  }

  public getUserId(): string {
    return this.svcUser.getCurrentUser().id;
  }

}
