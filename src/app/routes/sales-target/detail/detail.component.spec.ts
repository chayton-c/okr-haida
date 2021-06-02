import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTargetDetailComponent } from './detail.component';

describe('SalesTargetDetailComponent', () => {
  let component: SalesTargetDetailComponent;
  let fixture: ComponentFixture<SalesTargetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTargetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTargetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
