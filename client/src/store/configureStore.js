import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import costomersReducer from '../reducers/customersReducer'
import departmentsReducer from '../reducers/departmentsReducer'
import employeesReducer from '../reducers/employeesReducer'
import userReducer from '../reducers/userReducer'
import formErrorsReducers from '../reducers/formErrorsReducers'
import ticketReducer from '../reducers/ticketReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        customers: costomersReducer,
        departments: departmentsReducer,
        employees: employeesReducer,
        formErrors:formErrorsReducers,
        tickets:ticketReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore