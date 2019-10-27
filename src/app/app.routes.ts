import { PostsComponent } from './components/posts/posts.component';

import { MyLoginComponent } from './components/my-login/my-login.component';

import { FollowersComponent } from './components/followers/followers.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes =
    [
        {path: 'posts', component: PostsComponent},
        {path: 'login', component: MyLoginComponent},
        {path: 'followers', component: FollowersComponent},
        {path: '', component: FollowersComponent},
        {path: '**', component: PageNotFoundComponent}
      ];
 