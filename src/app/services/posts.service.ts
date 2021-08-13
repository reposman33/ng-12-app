import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Post } from '../modules/posts/models/post'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class PostsService {
	url: string = 'https://jsonplaceholder.typicode.com/posts'

	constructor(private http: HttpClient) {}

	getPosts(): Observable<Post[]> {
		return this.http.get<Post[]>(this.url)
	}

	getPost(id: number): Observable<Post> {
		return this.http.get<Post>(`${this.url}/${id}`)
	}
}
