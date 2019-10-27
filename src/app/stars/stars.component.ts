import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stars',
  template: `
 
            <span (click)="toggleStars()" 
                    class="glyphicon" aria-hidden="true"
                    [class.glyphicon-star]="isCliked"
                    [class.glyphicon-star-empty]="!isCliked"
                    style="font-size:14pt;"
                    >
             </span>

            `
                    ,
  
})
export class StarsComponent implements OnInit {

  isCliked = false;

  toggleStars() {
    this.isCliked = !this.isCliked;
  }

  constructor() { }

  ngOnInit() {
  }

}
