import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service'
import { Photo } from '../models/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoResolver implements Resolve<Photo[]> {
  constructor(private customersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    return this.getPhotos();
  }

  getPhotos(): Observable<Photo[]> {
    return this.customersService.getUsers()
  }
}
