import axios from '../config/axios'

export const setCustomers = customers => {
    return {
        type: "SET_CUSTOMERS",
        payload: customers
    }
}

export const getInitialData = () => {
    return dispatch => {
        axios.get("/customers")
            .then(response => {
                // console.log('axios')
                const customers = response.data
                dispatch(setCustomers(customers))
            })
    }
}

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