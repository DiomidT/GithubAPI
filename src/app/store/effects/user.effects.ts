import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {EReposAction, GetReposGit, GetReposGitSuccess,} from "../actions/reposAction";
import {map, mergeMap} from "rxjs/operators";
import {GitService} from "../../services/git-api/git.service";

@Injectable()
export class UserEffects {
    constructor(
        private gitService: GitService,
        private actions$: Actions,
    ) {
    }

    @Effect()
    getUsersGit$ = this.actions$.pipe(
        ofType<GetReposGit>(EReposAction.GetReposGit),
        map(action => action.payload),
        mergeMap((name) => this.gitService.getGithubUsers(name)),
        map((users) => new GetReposGitSuccess(users.items))
    );
}


