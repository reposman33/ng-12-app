import { Injectable } from '@angular/core';
import {  Router, CanLoad, Route, UrlSegment} from '@angular/router';
import { SecurityService } from '../services/security.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private securityService: SecurityService, private router: Router) {
  }

  canLoad(route: Route, segment: UrlSegment[]): boolean {
    if(this.securityService.isAuthenticated()) {
      return true
    } else {
       this.router.navigate(['/access'], {queryParams: {'return': segment[0].path}})
    }
    return false
  }
}
