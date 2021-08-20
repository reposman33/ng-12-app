import { Component, OnInit } from '@angular/core'
import { SecurityService } from './services/security.service'
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: string
	isAuthenticated: boolean

	constructor(private securityService: SecurityService) {}

	ngOnInit() {
		this.isAuthenticated = this.securityService.isAuthenticated()
		this.title = 'Angular playground'
	}
}
