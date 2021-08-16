import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { Post } from '../../models/post'
import * as animations from '../../animations'
@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss'],
	animations: [animations.openClose(1000, 'ease-in-out')],
})
export class PostsComponent implements OnInit {
	postData: {post: Post, posts: Post[]}
	postId: number

	constructor(
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe(data => {
		  this.postData = data.postData;
		  this.postId = this.activatedRoute.snapshot.params.id
		})
	}

}
