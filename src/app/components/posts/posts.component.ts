import { Component, OnInit } from '@angular/core';
import { dataServiceInterface } from 'src/app/Interfaces/data-service.interface';
import { PostServiceService } from './../../services/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(private service :PostServiceService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.posts = response;
  },
    error => { console.log('Data not Retrieved!')
  }
  )
  }

  getMyPosts() 
  {
      this.service.getAll().subscribe(response => {
        this.posts = response;
    },
      error => { console.log('Data not Retrieved!')
    }
    )
  }

}
