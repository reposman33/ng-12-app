import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { PostsService } from 'src/app/services/posts.service'
import { Post } from '../../models/post'
import * as animations from '../../animations'
@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss'],
	animations: [animations.openClose(1000, 'ease-in')],
})
export class PostsComponent implements OnInit {
	posts: Observable<Post[]>
	selectedPost: number = 1

	constructor(
		private activatedRoute: ActivatedRoute,
		private postService: PostsService,
	) {}

	ngOnInit(): void {
		// this.activatedRoute.data.subscribe(data => {
		//   this.postData = data.postData;
		//   this.postId = this.activatedRoute.snapshot.params.id
		// })
		this.posts = this.postService.getPosts()
	}

	selectPost(id: number) {
		this.selectedPost = id
	}
}
