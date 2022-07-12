import * as types from '../../types'

export type UserType = {
    name: string
    description: string
    price: string
    products?: object
}

export function getUserRequest(name: string): {
    type: string
    payload: string
} {
    return {
        type: types.GET_USER_REQUEST,
        payload: name
    }
}
export function getUserSuccess(user: UserType): {
    type: string
    payload: UserType
} {
    return {
        type: types.GET_USER_SUCCESS,
        payload: user
    }
}
export function getUserFailure(user: UserType): {
    type: string
    payload: UserType
} {
    return {
        type: types.GET_USER_FAILURE,
        payload: user
    }
}