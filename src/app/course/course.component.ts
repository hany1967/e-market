import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { CoursesService } from './../courses.service';

@Component({
  selector: 'course',
  template: ` <ul>
                  <li *ngFor="let course of courses">
                    {{course}}
                  </li>
                </ul>`,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  courses = [];
  
  constructor(service: CoursesService ) { 
      this.courses = service.getCourses();
  
  }

  ngOnInit() {
  }

}
