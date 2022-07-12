import { createReducer, on } from "@ngrx/store"
import { getUserDataFromLocalStorage } from "src/app/core/utils/tokenUtils"
import { AUTO_LOGIN, DECREMENT_API_CALL_COUNTER, INCREMENT_API_CALL_COUNTER, LOGIN_SUCCESS, SET_ERROR_STATUS } from "./auth.actions"
import { initial_auth_state } from "./auth.state"

const _authReducer = createReducer(initial_auth_state,
    on(LOGIN_SUCCESS, (state,action)=>{
        return {
            ...state,
            userData: {...action.data},
            isAuthenticated: true
        }
    }),
    on(SET_ERROR_STATUS, (state,action)=>{
        return {
            ...state,
            error: {
                errorMessage: action.errorMessage
            }
        }
    }),
    on(INCREMENT_API_CALL_COUNTER, (state, action)=>{
        return {
            ...state,
            loadingCounter: state.loadingCounter + 1
        }
    }),
    on(DECREMENT_API_CALL_COUNTER, (state, action)=>{
        return {
            ...state,
            loadingCounter: state.loadingCounter - 1
        }
    }), 
    on(AUTO_LOGIN, (state, action)=>{
        const user = getUserDataFromLocalStorage();
        if(user){
            return {
                ...state,
                userData: {...user},
                isAuthenticated: true
            }
        }else{
            return {
                ...state,
                userData: null,
                isAuthenticated: false
            }
        }
    
    }),
)

export function authReducer(state,action){
    return _authReducer(state,action)
}