import { Component } from '@angular/core'
import { SecurityService } from './services/security.service'
import { Router } from '@angular/router'
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: string
	isAuthenticated: boolean = false

	constructor(private securityService: SecurityService, private router: Router) {}

	signOut() {
		this.securityService.signOut()
		this.router.navigate(['/access'])
	}

	ngOnInit() {
		this.securityService.authenticated$.subscribe(authState => this.isAuthenticated = authState)
		this.title = 'Angular playground'
	}
}
