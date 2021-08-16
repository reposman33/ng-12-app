import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../modules/users/models/user'
import { Post } from '../modules/posts/models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	urls = {
    posts: 'https://jsonplaceholder.typicode.com/posts',
    users: 'https://jsonplaceholder.typicode.com/users'
  }

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
		return this.http.get<Post[]>(this.urls.posts)
	}

  getPost(id: number): Observable<Post> {
		return this.http.get<Post>(`${this.urls.posts}/${id}`)
	}

  getUsers(): Observable<User[]> {
		return this.http.get<User[]>(this.urls.users)
	}
}
