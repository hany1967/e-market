import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersComponent } from './followers.component';
import { HttpClientModule } from '@angular/common/http';
import { dataServiceInterface } from 'src/app/Interfaces/data-service.interface';
import { Observable, of } from 'rxjs';

//
// to stop observe after take
// .get(22).take(1).subscribe(p => ..)


class DummyService {

  getAll() {
      return of([1,2,3]);
  }

}
describe('FollowersComponent', () => {
  let component: FollowersComponent;
  let fixture: ComponentFixture<FollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersComponent ],
      imports: [
          HttpClientModule
       ], 
       providers: [{provide: dataServiceInterface, useClass: DummyService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
