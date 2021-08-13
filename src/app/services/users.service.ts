import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../modules/users/models/user'

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	url = 'https://jsonplaceholder.typicode.com/users'

	// eslint-disable-next-line no-useless-constructor
	constructor(private http: HttpClient) {}

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>(this.url)
	}
}
