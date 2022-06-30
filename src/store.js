import {legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import {listRestaurantReducer}from './Reducer/restaurantsReducer'

const reducers=combineReducers({
 restaurantList:listRestaurantReducer
})
const middleware=[thunk]

const store=createStore(reducers,applyMiddleware(...middleware))

export default store