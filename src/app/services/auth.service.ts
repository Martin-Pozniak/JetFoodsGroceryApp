import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated: boolean = false;
  private _user: User;

  constructor( private svcUser: UserService,
               private router: Router,
               private http: HttpClient ) { }

  public userIsAuthenticated(): boolean {
    return this._userIsAuthenticated;
  }

  public login( email: string, password: string ) {
    return this.authenticate(email, password);
  }

  public logout(){

    this._userIsAuthenticated = false;
    this.router.navigateByUrl("/auth");

  }

  public getUserId(): string {
    return this.svcUser.getCurrentUser().id;
  }

  public createAccount( email: string, password: string) {

    return this.http.post<AuthResponseData>(
                      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.fireBaseWebAPIKey}`,
                      { email: email,
                        password: password,
                        returnSecureToken: true } );

  }

  public authenticate(email: string, password:string) {

    return this.http.post<AuthResponseData>(
                      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.fireBaseWebAPIKey}`,
                      { email: email,
                        password: password } );

  }

}
