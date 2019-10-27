import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  fullName: string;

  constructor() { }

  ngOnInit() {
  }

  submitForm(f) {
    console.log(this.fullName);
    console.log(f);
  }

}
