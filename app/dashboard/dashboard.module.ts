import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DashboardRoutingModule } from "~/dashboard/dashboard-routing.module";
import { DashboardComponent } from "~/dashboard/dashboard.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DashboardModule { }
