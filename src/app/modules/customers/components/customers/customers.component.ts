import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Customer } from '../../models/customer'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-customers',
	templateUrl: './customers.component.html',
	styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
	customers: Customer[]
	isActive: boolean = false

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		console.log('customers = ', this.activatedRoute.snapshot.data.customers);
		this.customers = this.activatedRoute.snapshot.data.customers
	}

}
