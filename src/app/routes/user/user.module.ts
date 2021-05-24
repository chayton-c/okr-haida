import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './detail/detail.component';
import { UserListComponent } from './list/list.component';

const COMPONENTS: Type<void>[] = [
  UserDetailComponent,
  UserListComponent];

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: COMPONENTS,
})
export class UserModule { }
