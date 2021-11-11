import {createFeatureSelector, createSelector} from '@ngrx/store';
import { MergedRouteReducerState} from '../reducers/router/router-merge';
import {routerStateConfig} from '../../app.module';
import {IAppState} from '../state/app.state';
import * as fromRouter from '@ngrx/router-store';



export const selectRouter = createFeatureSelector< fromRouter.RouterReducerState<any>>('router');

export const {
    selectCurrentRoute,   // select the current route
    selectFragment,       // select the current route fragment
    selectQueryParams,    // select the current route query params
    selectQueryParam,     // factory function to select a query param
    selectRouteParams,    // select the current route params
    selectRouteParam,     // factory function to select a route param
    selectRouteData,      // select the current route data
    selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);

export const selectSelectedId = selectQueryParam('id');
