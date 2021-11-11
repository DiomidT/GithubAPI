import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CardItemComponent} from "./base-elements/card-item/card-item.component";

const Components = [
    CardItemComponent,
];

@NgModule({
    declarations: [
        ...Components
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ...Components
    ],
})
export class SharedModule {

}
