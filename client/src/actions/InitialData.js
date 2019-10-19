import { setCustomers } from './customer'
import axios from '../config/axios'
import { setDepartments } from './department'

export const getInitialData = () => {
    return dispatch => {
        Promise.all([axios.get("/customers"), axios.get("/departments")])
            .then(value => {
                const [customers, departments] = value
                dispatch(setCustomers(customers.data))
                dispatch(setDepartments(departments.data))
            })
        // axios.get("/customers")
        //     .then(response => {
        //         // console.log('axios')
        //         const customers = response.data
        //         dispatch(setCustomers(customers))
        //     })
    }
}