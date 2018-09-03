import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NewEntryComponent } from "~/newEntry/newEntry.component";

const routes: Routes = [
    { path: "", component: NewEntryComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NewEntryRoutingModule { }
