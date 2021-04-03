import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor( private svcAuth: AuthService, private router: Router ) {}

  public canLoad( route: Route,
                  segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if ( !this.svcAuth.userIsAuthenticated() ){
        this.router.navigateByUrl('/auth');
      }

      return this.svcAuth.userIsAuthenticated();

  }

}
