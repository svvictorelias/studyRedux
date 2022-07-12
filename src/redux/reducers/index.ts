import { combineReducers } from 'redux'
import { dataReducer } from './product'

const rootReducer = combineReducers({
    data: dataReducer
})

export default rootReducer