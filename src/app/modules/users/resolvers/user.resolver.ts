import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Observable, of } from 'rxjs'
import { catchError, delay } from 'rxjs/operators'
import { ApiService } from 'src/app/services/api.service'
import { User } from '../models/user'

@Injectable({
	providedIn: 'root',
})
export class UserResolver implements Resolve<any> {
	constructor(private apiService: ApiService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[] | string> {
		return this.getUsers()
	}

	getUsers(): Observable<User[] | string> {
		return this.apiService
			.getUsers()
			.pipe(
				catchError((error) =>
					of(`Error retrieving users: ${error.message} [${error.detail}]`),
				),
			)
	}
}
