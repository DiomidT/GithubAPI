import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "project-for-tests";
    linkArr: any[] = [
        {
            title: "Form",
            linkArr: [
                { link: "/forms", title: "Reactive Forms" },
            ]
        },
    ];
}
