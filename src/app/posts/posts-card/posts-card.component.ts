import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/models/posts';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss']
})
export class PostsCardComponent implements OnInit {

@Input() postObj !: Ipost 

  constructor() { }

  ngOnInit(): void {
  }

}
