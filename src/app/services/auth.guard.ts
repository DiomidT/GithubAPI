import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ConfigServiceService} from './config-service.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private configService: ConfigServiceService) {
    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.configService.getConfig().pipe(
        switchMap( res => {
            if ( res.adminName) {
                return of(true);
            } else  {
                return of(false);
            }
        })
    );
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canActivate(childRoute, state);
    }
}
