import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsDashboardComponent } from './posts-dashboard/posts-dashboard.component';
import { PostsCardComponent } from './posts-card/posts-card.component';
import { PostsFormComponent } from './posts-form/posts-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PostsDashboardComponent,
    PostsCardComponent,
    PostsFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    PostsDashboardComponent
  ]
})
export class PostsModule { }
