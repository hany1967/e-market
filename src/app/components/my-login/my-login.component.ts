import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { UserNameValidator } from '../../validators/username.validator';
import { dataServiceInterface } from '../../Interfaces/data-service.interface';
import { PostServiceService } from '../../services/post-service.service';
import { RouterModule, Router } from '@angular/router';

@Component({ 
  selector: 'my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent  implements OnInit {
  
    posts;

    myForm: FormGroup;

    @Input('defaultUser') user: string;

    @Output() successLogin = new EventEmitter();

    constructor(formBuilder: FormBuilder, private service: PostServiceService, private router: Router) {
      
      
        this.myForm = formBuilder.group({
                            username: ['',
                                        [
                                          Validators.required,
                                          Validators.minLength(5),
                                          UserNameValidator.mustNotContainSpaces
                                        ]
                            ],
                            password: ['',
                                        [ 
                                          Validators.required,
                                          Validators.minLength(10)
                                        ]
                                    ],
                            confirmPassword:['',
                                              [
                                                Validators.required,
                                                Validators.minLength(10)
                                              ]
                                    ],
                            extra: formBuilder.group({
                                    email:['', Validators.email],
                                    mobile:[''],
                                    address: ['']
                            })
                          },  
                          {
                          validator: UserNameValidator.passwordsDontMatch
                          }
                          
        )

      
    }

    ngOnInit() {
      console.log(this.user);
      this.username.setValue(this.user);
       
    }
 

    get username() {
      return this.myForm.get('username');
    }

    get password() {
      return this.myForm.get('password');
    }

    get confirmPassword() {
      return this.myForm.get('confirmPassword');
    }

    // Group in Extra group
    get email() {
      return this.myForm.get('extra.email');
    }
    get mobile() {
      return this.myForm.get('extra.mobile');
    }
    get address() {
      return this.myForm.get('extra.address');
    }


    check() {
      this.markFormGroupTouched(this.myForm);
      if (this.myForm.status === 'INVALID') return;
      console.log(this.myForm.value);
      this.successLogin.emit({username: this.username.value});
    }
 
    clear($event) {
      this.myForm.reset();
      this.posts = null;
    }

    private markFormGroupTouched(formGroup: FormGroup) {
      (<any>Object).values(formGroup.controls).forEach(control => {
        control.markAsTouched();
  
        if (control.controls) {
          this.markFormGroupTouched(control);
        }
      });
    }

 

    getMyPosts() 
    {
         this.service.getAll().subscribe(response => 
            {
              this.posts = response;
            },
            error => 
            {
                console.log('Data not Retrieved!')
            }
                 
      )
      this.router.navigate(['posts']);
    }

}












































      // myForm = new FormGroup({
      //                         username: new FormControl('',[
      //                                                       Validators.required,
      //                                                       Validators.minLength(5),
      //                                                       UserNameValidator.mustNotContainSpaces
      //                                                     ]),
      //                         password: new FormControl('',[
      //                                                     Validators.required,
      //                                                     Validators.minLength(10)
      //                                                   ]),
      //                         confirmPassword: new FormControl('',[
      //                                                     Validators.required,
      //                                                   ])
      //                       },  
      //                       {
      //                       validators: UserNameValidator.passwordsDontMatch
      //                       }
      // );

  