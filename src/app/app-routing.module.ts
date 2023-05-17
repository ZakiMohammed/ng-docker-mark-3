import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', loadComponent: () => import('./modules/posts/posts.component').then(x => x.PostsComponent) },
  { path: 'users', loadComponent: () => import('./modules/users/users.component').then(x => x.UsersComponent) },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
