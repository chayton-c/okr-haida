import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTargetListComponent } from './list.component';

describe('SalesTargetListComponent', () => {
  let component: SalesTargetListComponent;
  let fixture: ComponentFixture<SalesTargetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTargetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTargetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
