import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: ProfileComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'blog/:id',
    component: BlogComponent
  },
 
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
