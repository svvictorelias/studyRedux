import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { getProductsFailure, getProductsSuccess, ProductsType } from '../../actions'
import * as types from '../../types'

let userApi: ProductsType
const userRequest = async (name: string) => {
    try {
        const request = await fetch(`https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC`)
        const response = await request.json()
        userApi = response
        return true                
    } catch (error) {
        return false
    }
}

export function* userData(action: { type: string, payload: string }) {
    try {
        yield call(userRequest, action.payload)
        yield put(getProductsSuccess(userApi))
    } catch (error) {
        yield put(getProductsFailure(userApi))
    }
}

export default all([takeLatest(types.GET_PRODUCTS_REQUEST, userData)])