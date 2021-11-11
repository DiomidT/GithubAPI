import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
    {
        path: "forms",
        loadChildren: () => import("./modules/form-module/forms.module").then(
            (m) => m.FormsModule),
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
