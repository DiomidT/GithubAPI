import {IConfigState, initializeConfigState} from '../state/config.state';
import {ConfigAction, EConfigState} from '../actions/config.action';

export const ConfigReducer = (
    state = initializeConfigState,
    action: ConfigAction
): IConfigState => {
    switch (action.type) {
        case EConfigState.SetConfigSuccess:
            return  {
                ...state,
                config: action.payload
            };
        case EConfigState.GetConfigSuccess:
            return {
                ...state,
                config: action.payload
            };
        default:
            return state;
    }
};
