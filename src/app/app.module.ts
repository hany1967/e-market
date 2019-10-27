import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CoursesComponent } from './courses.component';
// import { CourseComponent } from './course/course.component';
// import { CourseService } from './course.service';
// import { summaryPipe } from './summary.pipe';
// import { StarsComponent } from './stars/stars.component';
// import { FavoriteComponent } from './favorite/favorite.component';
// import { ZippyComponent } from './zippy/zippy/zippy.component';
// import { SignupFormComponent } from './signup-form/signup-form/signup-form.component';
// import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyLoginComponent } from './components/my-login/my-login.component';
//import { UserNameValidator } from './validators/username.validator';
import { HttpClientModule } from '@angular/common/http';
// services Interface
import { dataServiceInterface } from './Interfaces/data-service.interface';
// Different services Implementation
import {  PostServiceService } from './services/post-service.service';
import { CommentServiceService } from './services/comment-service.service';

// Router
import { RouterModule} from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FollowersComponent } from './components/followers/followers.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StarsComponent } from './stars/stars.component';
import { summaryPipe } from './summary.pipe';
import { routes } from './app.routes';
import { MyFormComponent } from './components/my-form/my-form.component';
import { ReactFormComponent } from './components/react-form/react-form.component';


@NgModule({
  declarations: [
    AppComponent, 
    // CoursesComponent,
    // CourseComponent,
    summaryPipe,
    // FavoriteComponent,
    // ZippyComponent,
    // SignupFormComponent,
    // ChangePasswordComponent,
    MyLoginComponent,
    HomePageComponent,
    NavBarComponent,
    FollowersComponent, 
    PostsComponent, 
    PageNotFoundComponent,
    StarsComponent,
    MyFormComponent,
    ReactFormComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: dataServiceInterface, useClass: CommentServiceService},
              PostServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
