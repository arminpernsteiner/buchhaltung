import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Entry } from "./entry";

@Component({
    selector: "newEntry",
    moduleId: module.id,
    templateUrl: "./newEntry.component.html"
})
export class NewEntryComponent implements OnInit {
    private _entry: Entry;

    constructor(private routerExtensions: RouterExtensions) {

    }

    get entry(): Entry {
        return this._entry;
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    ngOnInit() {
        this._entry = new Entry("15.04.15", "Bankkonto", "Bankkonto", 0, "Text");
    }
}
