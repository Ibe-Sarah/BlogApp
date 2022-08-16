import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailPage } from '../post-detail/post-detail.page';

import { PostsPage } from './posts.page';

const routes: Routes = [
  {
    path: '',
    component: PostsPage
  },
  {
    path: "['/', 'post-detail', post.id]", component: PostDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsPageRoutingModule {}
