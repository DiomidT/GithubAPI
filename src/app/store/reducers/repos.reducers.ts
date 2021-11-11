import {EReposAction, ReposAction} from "../actions/reposAction";
import {initializeReposState, IReposState} from "../state/repos.state";

export const UserReducer = (
    state = initializeReposState,
    action: ReposAction
): IReposState => {
    switch (action.type) {
        case EReposAction.GetReposGitSuccess:
            return {
                ...state,
                reposGit: action.payload
            };
        case EReposAction.GetReposGitSuccess:
            return {
                ...state,
                reposGit: action.payload
            };
        case EReposAction.SetSelectedRepoGitSuccess:
            return {
                ...state,
                selectedRepo: action.payload
            };
        default:
            return state;
    }
};

