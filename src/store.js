
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import {restaurantlistreducer} from './reducer/restaurantreducer'

const reducers=combineReducers({
    restaurantList:restaurantlistreducer,
});

const middleware=[thunk] 


const store=createStore(reducers,applyMiddleware(...middleware));

export default store