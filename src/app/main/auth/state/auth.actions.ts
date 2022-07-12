import { createAction, props } from "@ngrx/store";

export const LOGIN_START = createAction('[ AUTH ]GET_LOGIN_RESPONSE',props<{form : any}>());

export const COGNITO_SIGNIN = createAction('[ AUTH ] COGNITO_SIGNIN' ,props<{userData : any, formData: any}>());

export const LOGIN_SUCCESS = createAction('[ AUTH ]LOGIN_SUCCESS' ,props<{data : any}>());



export const SET_ERROR_STATUS = createAction('[ AUTH ] SET_ERROR_STATUS', props<{errorMessage: any}>());

export const INCREMENT_API_CALL_COUNTER = createAction('[ AUTH ] INCREMENT_API_CALL_COUNTER');

export const DECREMENT_API_CALL_COUNTER = createAction('[ AUTH ] DECREMENT_API_CALL_COUNTER');

export const AUTO_LOGIN = createAction('[ AUTH ] AUTO_LOGIN');
// export const AMPLIFY_SIGNIN = createAction('[ AUTH ]AMPLIFY_SIGNIN',props<{username : any, password: any }>());
