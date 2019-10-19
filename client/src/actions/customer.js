import axios from '../config/axios'
import {getInitialData} from './InitialData'

export const setCustomers = customers => {
    return {
        type: "SET_CUSTOMERS",
        payload: customers
    }
}

// export const getInitialData = () => {
//     return dispatch => {
//         axios.get("/customers")
//             .then(response => {
//                 // console.log('axios')
//                 const customers = response.data
//                 dispatch(setCustomers(customers))
//             })
//     }
// }

export const setCustomer = (formData,props) => {
    return dispatch => {
        axios.post('/customers',formData)
            .then(response => {
                dispatch(getInitialData())
                // props.history.push('/customers')
                // console.log('setCustomer',response.data)
            })
    }
}

export const updateCustomer = (formData,id) => {
    return dispatch => {
        axios.put(`/customers/${id}`,formData)
            .then(response => {
                dispatch(getInitialData())
            })
    }
}

export const removeCustomer = id => {
    return dispatch => {
        axios.delete(`/customers/${id}`)
            .then(response => {
                dispatch(getInitialData())
            })
    }
}