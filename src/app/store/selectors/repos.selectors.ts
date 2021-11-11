import {createSelector} from "@ngrx/store";
import {IReposState} from "../state/repos.state";
import {IAppState} from "../state/app.state";

export const selectUsers = (state: IAppState) => state.users;

export const selectReposGitList = createSelector(
    selectUsers,
    (state: IReposState) => state.reposGit
);

export const selectSelectedRepo = createSelector(
    selectUsers,
    (state: IReposState) => state.selectedRepo
);
