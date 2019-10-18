import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import costomersReducers from '../reducers/customersReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        customers : costomersReducers
    }),applyMiddleware(thunk))
    return store
}

export default configureStore