import { Injectable } from '@angular/core';
import { UuidService } from './uuid.service';
import { SnackbarService } from './snackbar.service';
import { Ipost } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsArr: Array<Ipost> = [
    { title: "post1", content: "post1 content", id: "1" },
    { title: "post2", content: "post2 content", id: "2" },
    { title: "post3", content: "post3 content", id: "3" },
  ]

  constructor(private _snackBar: SnackbarService) { }

  getAllPost() {
    return this.postsArr
  }

  addPost(post:Ipost){
    this.postsArr.push(post);
    this._snackBar.openSnackBar(`post ${post.title} added successfully`,'close')
  }

}
