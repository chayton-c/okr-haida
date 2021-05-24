import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './detail/detail.component';
import { UserListComponent } from './list/list.component';

const routes: Routes = [

  { path: 'detail', component: UserDetailComponent },
  { path: 'list', component: UserListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
