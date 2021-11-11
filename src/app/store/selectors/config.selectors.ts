import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IReposState} from "../state/repos.state";
import {IConfigState} from "../state/config.state";

export const selectConfig = (state: IAppState) => state.config;

export const selectedConfig = createSelector(
    selectConfig,
    (state: IConfigState) => state.config
);
