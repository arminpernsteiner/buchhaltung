import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NewEntryRoutingModule } from "~/newEntry/newEntry-routing.module";
import { NewEntryComponent } from "~/newEntry/newEntry.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NewEntryRoutingModule
    ],
    declarations: [
        NewEntryComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewEntryModule { }
