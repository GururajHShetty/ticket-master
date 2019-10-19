import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import costomersReducers from '../reducers/customersReducer'
import departmentsReducers from '../reducers/departmentsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        customers : costomersReducers,
        departments : departmentsReducers
    }),applyMiddleware(thunk))
    return store
}

export default configureStore