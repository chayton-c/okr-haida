import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { RoleRoutingModule } from './role-routing.module';
import { RoleListComponent } from './list/list.component';
import { RoleDetailComponent } from './detail/detail.component';
import {NzStepsModule} from "ng-zorro-antd/steps";
import {Step1Component} from "./detail/step1.component";
import {Step2Component} from "./detail/step2.component";

const COMPONENTS: Type<void>[] = [
  RoleListComponent,
  RoleDetailComponent];

@NgModule({
    imports: [
        SharedModule,
        RoleRoutingModule,
        NzStepsModule
    ],
  declarations: [
    COMPONENTS,
    Step1Component,
    Step2Component
  ],
})
export class RoleModule { }
