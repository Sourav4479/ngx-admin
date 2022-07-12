
 export interface errorStatus {
    errorMessage : string
 }
export interface AuthState{
    userData : any,
    isAuthenticated: boolean,
    error: errorStatus,
    loadingCounter: number
    
}
export const AUTH_STATE_NAME = 'auth';
export const initial_auth_state: AuthState = {
    userData: null,
    isAuthenticated: false,
    error: {errorMessage:''},
    loadingCounter : 0
}