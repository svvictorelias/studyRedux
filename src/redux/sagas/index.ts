import { all } from 'redux-saga/effects'
import user from './product'

export default function* rootSaga(): Generator<any> {
    return yield all([user])
}