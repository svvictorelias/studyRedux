import * as types from '../../types'

export type ProductsType = {
    products?: object
}

export function getProductsRequest(): {
    type: string
} {
    return {
        type: types.GET_PRODUCTS_REQUEST,
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