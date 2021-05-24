import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { SalesTargetRoutingModule } from './sales-target-routing.module';
import { SalesTargetListComponent } from './list/list.component';
import {ListModule, NavBarModule} from "ng-zorro-antd-mobile";
import {G2BarModule, G2MiniBarModule, G2TimelineModule} from "@delon/chart";
import { SalesTargetEditListComponent } from './edit-list/edit-list.component';
import { SalesTargetDetailComponent } from './detail/detail.component';

const COMPONENTS: Type<void>[] = [
  SalesTargetListComponent,
  SalesTargetEditListComponent,
  SalesTargetDetailComponent];

@NgModule({
  imports: [
    SharedModule,
    SalesTargetRoutingModule,
    NavBarModule,
    ListModule,
    G2MiniBarModule,
    G2BarModule,
    G2TimelineModule
  ],
  declarations: COMPONENTS,
})
export class SalesTargetModule { }
