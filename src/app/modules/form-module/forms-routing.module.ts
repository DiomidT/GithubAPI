import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ReactiveFormsComponent} from "./forms/reactive-forms/reactive-forms.component";
import {DetailViewComponent} from "./detail-view/detail-view.component";

const routes: Routes = [
    {path: "", component: ReactiveFormsComponent},
    {path: "details", component: DetailViewComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormsRoutingModule {

}
