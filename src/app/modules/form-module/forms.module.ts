import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsComponent} from "./forms/reactive-forms/reactive-forms.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsRoutingModule} from "./forms-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";
import {DetailViewComponent} from "./detail-view/detail-view.component";


@NgModule({
    declarations: [ReactiveFormsComponent, DetailViewComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsRoutingModule,
        MatIconModule,
        SharedModule,
    ]
})
export class FormsModule {
}
