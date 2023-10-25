import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/models/posts';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-posts-dashboard',
  templateUrl: './posts-dashboard.component.html',
  styleUrls: ['./posts-dashboard.component.scss']
})
export class PostsDashboardComponent implements OnInit {
  postsArr: Array<Ipost> = [];  
  constructor(private _postService: PostsService) { }

  ngOnInit(): void {
    this.postsArr = this._postService.getAllPost()
  }

}
