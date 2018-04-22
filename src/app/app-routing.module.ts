import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {PostComponent} from './post/post.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'admin', component: AdminComponent
  }
  // {
  //   path: 'posts', component: PostListComponent
  // },
  // {
  //   path: 'posts/:tag', component: PostListComponent
  // },
  // {
  //   path: 'admin', component: AdminComponent
  // },
  // {
  //   path: '**', redirectTo: '/notfound'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
