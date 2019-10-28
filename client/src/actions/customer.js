import axios from '../config/axios'
import { getInitialData } from './InitialData'
import { setErrors } from './errors'
import { clearErrors } from './errors'


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

export const setCustomer = (formData, props) => {
    return dispatch => {
        axios.post('/customers', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    dispatch(setErrors(response.data.errors, 'customer'))
                } else {
                    dispatch(getInitialData())
                    dispatch(clearErrors())
                }
            })
    }
}

export const updateCustomer = (formData, id) => {
    return dispatch => {
        axios.put(`/customers/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(getInitialData())
            })
    }
}

export const removeCustomer = id => {
    return dispatch => {
        axios.delete(`/customers/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(getInitialData())
            })
    }
}