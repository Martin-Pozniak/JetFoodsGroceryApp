import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface AuthResponseData {
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

  private _user = new BehaviorSubject<User>(null);

  constructor( private svcUser: UserService,
               private router: Router,
               private http: HttpClient ) { }

  public userIsAuthenticated() {

    return true;
    return this._user.asObservable()
    .pipe(
      map( user => {
        if( user ) {
          return !!user.token
        }
        else{
          return false;
        }
     }
    ));

  }

  public getUserId() {
    return this._user.asObservable()
    .pipe( map( user => {
      if( user ){
        return user.id;
      }
      else{
        return null;
      }
    }) );
  }

  public login( email: string, password: string ) {
    return this.authenticate(email, password);
  }

  public anonymousLogin() {

    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.fireBaseWebAPIKey}`,
      { returnSecureToken: true } )
      .pipe( tap( userData => {
        this.setUserData( userData );
      }));;

  }

  public logout(){

    //Nullify the old user.
    this.router.navigateByUrl("/auth");

  }

  public createAccount( firstName: string, lastName:string, email: string, password: string, birthday?: Date) {

    //Do something if birthday null?
    return this.http.post<AuthResponseData>(
                      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.fireBaseWebAPIKey}`,
                      { email: email,
                        password: password,
                        returnSecureToken: true }
            ).pipe( tap( userData => {
              this.setUserData( userData, firstName, lastName, birthday); // MP, add address?
            }));

    //Verification email??

  }

  public authenticate(email: string, password:string) {

    return this.http.post<AuthResponseData>(
                      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.fireBaseWebAPIKey}`,
                      { email: email,
                        password: password }
                    ).pipe( tap( userData => {
                      this.setUserData( userData );
                    }));;

  }

  private setUserData( userData: AuthResponseData, firstName?: string, lastName?: string, birthday?: Date ) {

    const expirationTime = new Date ( new Date().getTime() +
                                                (+userData.expiresIn * 1000) );

    return this._user.next( new User( userData.localId,
                               firstName,
                               lastName,
                               birthday,
                               userData.email,
                               ['user'],
                               'Carol Stream',
                               userData.idToken,
                               expirationTime ));

  }

}
