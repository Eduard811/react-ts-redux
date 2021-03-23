export interface UserState {
    users: any[]
    isLoading: boolean
    error: null | string
}

export enum userActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface FetchUserAction {
    type: userActionTypes.FETCH_USERS
}

export interface FetchUserSuccessAction {
    type: userActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

export interface FetchUserErrorAction {
    type: userActionTypes.FETCH_USERS_ERROR
    payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction