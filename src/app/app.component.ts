import { Component, OnInit } from '@angular/core'
import { PostsService } from './services/posts.service'
import { Post } from './modules/posts/models/post'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: 'lazy-loading-demo'
}
