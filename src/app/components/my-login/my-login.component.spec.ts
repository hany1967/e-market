import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MyLoginComponent } from './my-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StarsComponent } from '../../stars/stars.component';
import { summaryPipe } from '../../summary.pipe';
import { PostServiceService } from '../../services/post-service.service';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';

class RouterStub {
  navigate(param) {
   
  }
}

describe('MyLoginComponent', () => {
  let component: MyLoginComponent;
  let fixture: ComponentFixture<MyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
                ReactiveFormsModule, 
                HttpClientModule
               ],
      declarations: 
              [ MyLoginComponent,
                StarsComponent,
                summaryPipe 
                ],
      providers: [  // PostServiceService,                   //=======> Replaced by Spy
                    {provide: Router, useClass: RouterStub}], //=======> Replaced by Stub
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterAll(() => {
    component.myForm.get('username').setValue('');
    component.myForm.get('password').setValue('');
    component.myForm.get('confirmPassword').setValue('');

     let de = fixture.debugElement.query(By.css('.filteredName'));
     let el: HTMLElement = de.nativeElement;
     el.innerText = ''; 
     
})

  it('1. should create', () => {
    expect(component).toBeTruthy();
  });


  it('2. should have "username", "password" and "Confirm Pasword" Fields', () => {
    let theForm = component.myForm;
    expect(theForm.contains('username')).toBeTruthy();
    expect(theForm.contains('password')).toBeTruthy();
    expect(theForm.contains('confirmPassword')).toBeTruthy();

  });

  it('3. shouldn not accept spaces in user name', () => {
    let theForm = component.myForm;
    let control = theForm.get('username');
    control.setValue('no space allowed');
    expect(control.valid).toBeFalsy();
  });

  it('4. Password should be equal or greater then 10 characters', () => {
    let control1 = component.myForm.get('password');
    control1.setValue('123');
    expect(control1.valid).toBeFalsy();

    let control2 = component.myForm.get('password');
    control2.setValue('1234567890');
    expect(control2.valid).toBeTruthy();
    
  });

  it('5. confirmPassword should be equal or greater then 10 characters', () => {
    let control1 = component.myForm.get('confirmPassword');
    control1.setValue('123');
    expect(control1.valid).toBeFalsy();

    let control2 = component.myForm.get('confirmPassword');
    control2.setValue('1234567890');
    expect(control2.valid).toBeTruthy();
    
  });

  it('6. password & confirmPassword should match', () => {

    // Arrange
    let username = component.myForm.get('username');
    let password = component.myForm.get('password');
    let confirmPassword = component.myForm.get('confirmPassword');
  
    // Act
    username.setValue('12345');
    password.setValue('1234567890111');
    confirmPassword.setValue('1234567890');

    // Assert
    expect(component.myForm.valid).toBeFalsy();

    // Act (Again)
    username.setValue('12345');
    password.setValue('1234567890111');
    confirmPassword.setValue('1234567890111');
 
    // Assert
    expect(component.myForm.valid).toBeTruthy();
  });


  it('7. Expect successful login to trigger successlogin EventEmitter with object that contains username value', () => {
    
    // Arrange
    component.myForm.get('username').setValue('username');
    component.myForm.get('password').setValue('1234567890111');
    component.myForm.get('confirmPassword').setValue('1234567890111');

    // Act
    let out = null;
    component.successLogin.subscribe(output => { out =  output.username});
    component.check();

    // Assert
    expect(out).not.toBeNull();
    expect(out).toBe('username');
     
    });

    // Integration Test
    it('8. Integration Inteface DOM: Filtered name should be 5 chars only', () => {
      // Arrange/Act
      component.myForm.get('username').setValue('12345678901234567890')
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('.filteredName'));
      let el: HTMLElement = de.nativeElement;
 
      // Assert
      expect(el.innerText).toBe('12345'); 
    });


    
    it('9. Integration Service: Component should Call getAll from service and return posts',() => {
      
      // Arrange
      let service = TestBed.get(PostServiceService);
      spyOn(service,'getAll').and.returnValue( of([1,2,3])); /* Observable "of" must be imported from rjx */
             
      // Act
      component.getMyPosts();
  
      // Assert
      expect(component.posts.length).toEqual(3);

      // Other Method if provider is specified for that component privately 
      //let service = fixture.debugElement.injector.get(PostServiceService)
    });


    it('10. Integration Router: navigate to "posts" after getMyPosts method get called',() => {

      // Arrange
      let router = TestBed.get(Router);
      let spy = spyOn(router,'navigate');
      let selector = fixture.debugElement.query(By.css('.showPosts'));

      // Act to simulate click
      selector.triggerEventHandler('click',null);
      
      // Assert
      expect(spy).toHaveBeenCalledWith(['posts']);

      
    });


});
