import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { getProductsFailure, getProductsSuccess, ProductsType } from '../../actions'
import * as types from '../../types'

let productApi: ProductsType
const productRequest = async (name: string) => {
    try {
        const request = await fetch(`https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC`)
        const response = await request.json()
        productApi = response
        return true                
    } catch (error) {
        return false
    }
}

export function* productData(action: { type: string, payload: string }) {
    try {
        yield call(productRequest, action.payload)
        yield put(getProductsSuccess(productApi))
    } catch (error) {
        yield put(getProductsFailure(productApi))
    }
}

export default all([takeLatest(types.GET_PRODUCTS_REQUEST, productData)])