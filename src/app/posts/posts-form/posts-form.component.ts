import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from 'src/app/shared/models/posts';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.scss']
})
export class PostsFormComponent implements OnInit {
  postForm !: FormGroup;
  constructor(private _postService: PostsService, private _uuidService: UuidService) { }

  ngOnInit(): void {
    this.createPostForm()

  }
  createPostForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required])
    })
  }

  onProdAdd() {
    let postObj: Ipost = { ...this.postForm.value, id: this._uuidService.create_UUID() };
    this._postService.addPost(postObj)
    console.log(postObj);
    this.postForm.reset();

  }

}
