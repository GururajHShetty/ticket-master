import { setCustomers } from './customer'
import axios from '../config/axios'
import { setDepartments } from './department'
import { setEmployees } from './employees'

export const getInitialData = () => {
    return dispatch => {
        Promise.all([axios.get("/customers"), axios.get("/departments"), axios.get("/employees")])
            .then(value => {
                const [customers, departments, employees] = value
                dispatch(setCustomers(customers.data))
                dispatch(setDepartments(departments.data))
                dispatch(setEmployees(employees.data))
            })
    }
}