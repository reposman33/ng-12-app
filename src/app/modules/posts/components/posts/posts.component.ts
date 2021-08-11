import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postData: any
  postId: string
  
  constructor(private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.postData = data.postData;
      this.postId = this.activatedRoute.snapshot.params.id

    })
  }

}
