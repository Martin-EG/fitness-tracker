import { Action } from '@ngrx/store';

export const SET_AUTHENTICATED = '[Auth] Set Authenticated';
export const SET_UNAUNTHENTICATED = '[Auth] Set Unauthenticated';

export class SetAuthenticated implements Action {
    readonly type = SET_AUTHENTICATED;
}

export class SetUnauthenticated implements Action {
    readonly type = SET_UNAUNTHENTICATED;
}

export type AuthActions = SetAuthenticated | SetUnauthenticated;