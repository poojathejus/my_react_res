import{createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {restaurantlistreducer} from './reducers/restreducer'

//reducer
const reducer = combineReducers({
    restReducer : restaurantlistreducer
})

//middleware
const middleware = [thunk]

//create store
const store = createStore(reducer,applyMiddleware(...middleware))

export default store