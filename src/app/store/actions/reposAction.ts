import {Action} from "@ngrx/store";
import {IRepoDto} from "../../classDTO/userDto/userDto";


export enum EReposAction {
    GetReposGit = "[Users] Get Repos Git",
    GetReposGitSuccess = "[Users] Get Repos Git Success",
    SetSelectedRepoGitSuccess = "[Users] Set Selected Repo Git Success",
}

export class GetReposGit implements Action {
    public readonly type = EReposAction.GetReposGit;

    constructor(public payload: string) {
    }
}

export class GetReposGitSuccess implements Action {
    public readonly type = EReposAction.GetReposGitSuccess;

    constructor(public payload: IRepoDto[]) {
    }
}

export class SetSelectedRepoGitSuccess implements Action {
    public readonly type = EReposAction.SetSelectedRepoGitSuccess;

    constructor(public payload: IRepoDto) {
    }
}


export type ReposAction = GetReposGit | GetReposGitSuccess | SetSelectedRepoGitSuccess;
