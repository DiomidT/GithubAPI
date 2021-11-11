import {Action} from '@ngrx/store';
import {IConfig} from '../../classDTO/config/config,interface';

export enum EConfigState {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get Config Success',
    SetConfig = '[Config] Set Config',
    SetConfigSuccess = '[Config] Set Config Success',
}

export class GetConfig implements Action {
    public readonly type = EConfigState.GetConfig;
}

export class GetConfigSuccess implements Action {
    public  readonly type = EConfigState.GetConfigSuccess;
    constructor(public payload: IConfig) {
    }
}

export class SetConfig implements Action {
    public readonly type = EConfigState.SetConfig;
    constructor(public payload: IConfig) {
    }
}

export class SetConfigSuccess implements Action {
    public readonly type = EConfigState.SetConfigSuccess;
    constructor(public payload: IConfig) {
    }
}

export type ConfigAction = GetConfig | GetConfigSuccess | SetConfig | SetConfigSuccess;
