import {RouterReducerState} from "@ngrx/router-store";
import {initializeReposState, IReposState} from "./repos.state";
import {IConfigState, initializeConfigState} from "./config.state";

export interface IAppState {
    router?: RouterReducerState;
    users: IReposState;
    config: IConfigState;
}

export const initializeAppState: IAppState = {
    users: initializeReposState,
    config: initializeConfigState,
};

export function getInitializeState(): IAppState {
    return initializeAppState;
}
