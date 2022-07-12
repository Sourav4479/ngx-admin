import { ActionReducer } from "@ngrx/store";

export function clearState(reducer: ActionReducer<any>): ActionReducer<any>  {
    return function (state, action) {
      if (action.type === '[ APP ] LOGOUT') {
        state = undefined;
      }
  
      return reducer(state, action);
    };
  }