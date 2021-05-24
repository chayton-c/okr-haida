import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTargetListComponent } from './list/list.component';
import { SalesTargetEditListComponent } from './edit-list/edit-list.component';
import { SalesTargetDetailComponent } from './detail/detail.component';

const routes: Routes = [

  { path: 'list', component: SalesTargetListComponent },
  { path: 'edit-list', component: SalesTargetEditListComponent },
  { path: 'detail', component: SalesTargetDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesTargetRoutingModule { }
