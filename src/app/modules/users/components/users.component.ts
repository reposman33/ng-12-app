import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { User } from '../models/user'

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
	users: User[] = []

	constructor(
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit() {
		this.users = this.activatedRoute.snapshot.data.users
	}
}
