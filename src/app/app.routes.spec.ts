import { routes } from "./app.routes"
import { FollowersComponent } from './components/followers/followers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyLoginComponent } from './components/my-login/my-login.component';
import { PostsComponent } from './components/posts/posts.component';


describe('Routes',() => {

     it('should have route for followers',() => {

        expect(routes).toContain({path: 'followers', component: FollowersComponent});

     });

     it('should have route for users',() => {

      expect(routes).toContain({path: 'posts', component: PostsComponent});

   });

   it('should have route for login',() => {

      expect(routes).toContain({path: 'login', component: MyLoginComponent});

   });

   it('should have route for not Found pages',() => {

      expect(routes).toContain({path: '**', component: PageNotFoundComponent});

   });

})

