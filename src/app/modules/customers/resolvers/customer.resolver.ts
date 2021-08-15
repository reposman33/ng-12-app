import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service'
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolver implements Resolve<Customer[]> {
  constructor(private customersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer[]> {
    return this.getCustomers();
  }

  getCustomers(): Observable<Customer[]> {
    return this.customersService.getUsers()
  }
}
