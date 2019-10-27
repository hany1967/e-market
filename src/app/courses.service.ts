import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})

export class CoursesService {

  constructor() { }

  courses = ['Angular','Vue','React'];

  getCourses() {
        return this.courses;
  }
}
