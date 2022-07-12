import * as types from '../../types'

export type ProductsType = {
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
export function getUserSuccess(user: ProductsType): {
    type: string
    payload: ProductsType
} {
    return {
        type: types.GET_USER_SUCCESS,
        payload: user
    }
}
export function getUserFailure(user: ProductsType): {
    type: string
    payload: ProductsType
} {
    return {
        type: types.GET_USER_FAILURE,
        payload: user
    }
}