import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Observable, of } from 'rxjs'
import { ApiService } from 'src/app/services/api.service'
import { Photo } from '../models/photo'

@Injectable({
	providedIn: 'root',
})
export class PhotoResolver implements Resolve<Photo[]> {
	constructor(private apiService: ApiService) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<Photo[]> {
		return this.getPhotos()
	}

	getPhotos(): Observable<Photo[]> {
		return this.apiService.getPhotos()
	}
}
