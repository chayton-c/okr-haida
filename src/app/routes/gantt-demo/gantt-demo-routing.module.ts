import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanttDemoEmptyComponent } from './empty/empty.component';

const routes: Routes = [

  { path: 'empty', component: GanttDemoEmptyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GanttDemoRoutingModule { }
