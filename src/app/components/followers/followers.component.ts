import { Component, OnInit } from '@angular/core';
import { dataServiceInterface } from 'src/app/Interfaces/data-service.interface';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: [];

  constructor(private service: dataServiceInterface) { }

  ngOnInit() {
    console.log('started')
    this.service.getAll().subscribe(response => {
      this.followers = response;
    })
  }

}
