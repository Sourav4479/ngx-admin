import { createFeatureSelector, createSelector } from "@ngrx/store";
import {  AuthState, AUTH_STATE_NAME } from "./auth.state";

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const checkForError = createSelector(getAuthState,(state)=>{
    return state.error.errorMessage 
})


export const apiCallCheckCounter = createSelector(getAuthState, (state)=>{
    return state.loadingCounter
})
export const checkIsAuthenticated = createSelector(getAuthState,(state)=>{
    return state.isAuthenticated
})


