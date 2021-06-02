import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTargetEditListComponent } from './edit-list.component';

describe('SalesTargetEditListComponent', () => {
  let component: SalesTargetEditListComponent;
  let fixture: ComponentFixture<SalesTargetEditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTargetEditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTargetEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
