import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { RoleOrganizationRoutingModule } from './role-organization-routing.module';
import { RoleOrganizationDetailComponent } from './detail/detail.component';

const COMPONENTS: Type<void>[] = [
  RoleOrganizationDetailComponent];

@NgModule({
  imports: [
    SharedModule,
    RoleOrganizationRoutingModule
  ],
  declarations: COMPONENTS,
})
export class RoleOrganizationModule { }
