import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {IRepoDto} from "../../../../classDTO/userDto/userDto";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectReposGitList} from "../../../../store/selectors/repos.selectors";
import {GitService} from "../../../../services/git-api/git.service";
import {IAppState} from "../../../../store/state/app.state";
import {GetReposGit, SetSelectedRepoGitSuccess} from "../../../../store/actions/reposAction";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
    selector: "app-reactive-forms",
    templateUrl: "./reactive-forms.component.html",
    styleUrls: ["./reactive-forms.component.scss"]
})
export class ReactiveFormsComponent implements OnInit {

    git: FormControl = new FormControl();
    usersGit$: Observable<IRepoDto[]> = this.store.pipe(
        select(selectReposGitList)
    );

    constructor(
        private gitService: GitService,
        private store: Store<IAppState>,
        private router: Router,
    ) {
    }

    public ngOnInit(): void {
        this.git.valueChanges
            .pipe(
                distinctUntilChanged(),
                debounceTime(300)
            )
            .subscribe((v) => {
                this.store.dispatch(new GetReposGit(v));
            });
    }

    showDetails(repo: IRepoDto) {
        console.log(repo);
        this.store.dispatch(new SetSelectedRepoGitSuccess(repo));
        this.router.navigate(["forms/details"]);
    }
}
