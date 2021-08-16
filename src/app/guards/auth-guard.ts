import { state } from '@angular/animations';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Router } from '@angular/router';
import { SecurityService } from '../services/security.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private securityService: SecurityService, private router: Router ) {}

  canLoad(route: Route, segments: UrlSegment[]) {
    if(this.securityService.isAuthenticated()) {
      return true
    } else {
      this.router.navigate(['/access'], {queryParams: {'return': this.router.url}})
    }
    return false
  }
  
}
