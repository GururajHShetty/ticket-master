import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import costomersReducer from '../reducers/customersReducer'
import departmentsReducer from '../reducers/departmentsReducer'
import employeesReducer from '../reducers/employeesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        customers : costomersReducer,
        departments : departmentsReducer,
        employees : employeesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore