import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IRepoDto} from "../../../classDTO/userDto/userDto";
import {select, Store} from "@ngrx/store";
import {selectSelectedRepo} from "../../../store/selectors/repos.selectors";
import {IAppState} from "../../../store/state/app.state";
import {Router} from "@angular/router";

@Component({
    selector: 'app-detail-view',
    templateUrl: './detail-view.component.html',
    styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
    selectedRepo$: Observable<IRepoDto> = this.store.pipe(
        select(selectSelectedRepo)
    );

    constructor(
        private store: Store<IAppState>,
        private router: Router,
        ) {
    }

    ngOnInit(): void {
      this.selectedRepo$.subscribe( (v) => {
          if (!v) {
              this.router.navigate(["forms"]);
          }
      });
    }

}
