import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder)  {
     this.myForm = fb.group({
                            name: [''],
                            email: [''],
                            phone: ['']
                          });

   }


   formSubmit() {
     console.log(this.myForm.value);
   }

  ngOnInit() {
  }

}
