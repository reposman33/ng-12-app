import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Photo } from '../../models/photos'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-photos',
	templateUrl: './photos.component.html',
	styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent {
	customers: Photo[]
	isActive: boolean = false

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		console.log('customers = ', this.activatedRoute.snapshot.data.customers);
		this.customers = this.activatedRoute.snapshot.data.customers
	}

}
