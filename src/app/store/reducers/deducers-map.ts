import {IAppState} from '../state/app.state';
import {ActionReducerMap} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {UserReducer} from './repos.reducers';
import {ConfigReducer} from './config.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: UserReducer,
    config: ConfigReducer
};
