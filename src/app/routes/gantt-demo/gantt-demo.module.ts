import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { GanttDemoRoutingModule } from './gantt-demo-routing.module';
import { GanttDemoEmptyComponent } from './empty/empty.component';
import {AngularGanttScheduleTimelineCalendarModule} from "angular-gantt-schedule-timeline-calendar";

const COMPONENTS: Type<void>[] = [
  GanttDemoEmptyComponent];

@NgModule({
  imports: [
    SharedModule,
    GanttDemoRoutingModule,
    AngularGanttScheduleTimelineCalendarModule
  ],
  declarations: COMPONENTS,
})
export class GanttDemoModule {

}
