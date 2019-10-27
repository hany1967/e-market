import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By} from '@angular/platform-browser';
import { StarsComponent } from './stars.component';

describe('StarsComponent', () => {
  let component: StarsComponent;
  let fixture: ComponentFixture<StarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a filled star if togellStars is called', () => {

    // Act
    component.toggleStars();
    fixture.detectChanges();
    // Assert
    let de = fixture.debugElement.query(By.css('.glyphicon'));
    expect(de.classes['glyphicon-star']).toBeTruthy();


    // Act (Again)
    component.toggleStars();
    fixture.detectChanges();
    // Assert
    de = fixture.debugElement.query(By.css('.glyphicon'));
    expect(de.classes['glyphicon-star-empty']).toBeTruthy();

  
  });


  it('Integration: should show a filled star if component is clicked', () => {

    // Arrange
    let selector = fixture.debugElement.query(By.css('.glyphicon'));

    // Act
    selector.triggerEventHandler('click',null);
    expect(component.isCliked).toBeTruthy();
    fixture.detectChanges();
    expect(selector.classes['glyphicon-star']).toBeTruthy();
  
    // Act Again
    selector.triggerEventHandler('click',null);
    expect(component.isCliked).toBeFalsy();
    fixture.detectChanges();
    expect(selector.classes['glyphicon-star']).toBeFalsy();
     
  });



});
