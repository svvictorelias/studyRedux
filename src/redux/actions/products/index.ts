import * as types from '../../types'

export type ProductsType = {
    name: string
    description: string
    price: string
    products?: object
}

export function getProductsRequest(name: string): {
    type: string
    payload: string
} {
    return {
        type: types.GET_PRODUCTS_REQUEST,
        payload: name
    }
}
export function getProductsSuccess(product: ProductsType): {
    type: string
    payload: ProductsType
} {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        payload: product
    }
}
export function getProductsFailure(product: ProductsType): {
    type: string
    payload: ProductsType
} {
    return {
        type: types.GET_PRODUCTS_FAILURE,
        payload: product
    }
}