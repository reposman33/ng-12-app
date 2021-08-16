import { Injectable } from '@angular/core'
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
} from '@angular/router'
import { forkJoin, Observable, of } from 'rxjs'
import { ApiService } from 'src/app/services/api.service'
import { delay, map } from 'rxjs/operators'
import { Post } from '../models/post'

@Injectable({
	providedIn: 'root',
})
export class PostsResolver implements Resolve<Observable<any>> {
	constructor(private apiService: ApiService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return forkJoin([
			this.getPosts(),
			this.getPost(route.params.id ? route.params.id : 1),
		]).pipe(
			map((result) => {
				return {
					posts: result[0],
					post: result[1],
				}
			}),
		)
	}

	getPosts(): Observable<Post[]> {
		return this.apiService.getPosts()
	}

	getPost(id: number): Observable<Post> {
		return this.apiService.getPost(id)
	}
}
