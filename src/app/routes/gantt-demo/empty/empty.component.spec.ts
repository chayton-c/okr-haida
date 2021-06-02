import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GanttDemoEmptyComponent } from './empty.component';

describe('GanttDemoEmptyComponent', () => {
  let component: GanttDemoEmptyComponent;
  let fixture: ComponentFixture<GanttDemoEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanttDemoEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttDemoEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
