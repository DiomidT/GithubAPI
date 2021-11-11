import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {EConfigState, GetConfig, GetConfigSuccess, SetConfig, SetConfigSuccess} from "../actions/config.action";
import {map, switchMap} from "rxjs/operators";
import {ConfigServiceService} from "../../services/config-service.service";
import {IConfig} from "../../classDTO/config/config,interface";
import {of} from "rxjs";

@Injectable()
export class ConfigEffects {
    constructor(
        private configService: ConfigServiceService,
        private actions$: Actions,
    ) {
    }

    @Effect()
    getConfig$ = this.actions$.pipe(
        ofType<GetConfig>(EConfigState.GetConfig),
        switchMap(() => this.configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    );

    @Effect()
    setConfig = this.actions$.pipe(
        ofType<SetConfig>(EConfigState.SetConfig),
        map(action => action.payload),
        switchMap((config) => of(new SetConfigSuccess(config)))
    );

}
