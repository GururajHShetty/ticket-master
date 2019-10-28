import axios from "../config/axios"
import { getInitialData } from './InitialData'
import { setErrors } from './errors'

export const setEmployees = employees => {
    return {
        type: 'SET_EMPLOYEES',
        payload: employees
    }
}

export const startSetEmployee = formData => {
    return dispatch => {
        axios.post('/employees', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    // console.log(response.data.errors)
                    dispatch(setErrors(response.data.errors, 'employee'))
                } else {
                    dispatch(getInitialData())
                }
            })
    }
}

export const updateEmployee = (formData, id, props) => {
    return dispatch => {
        axios.put(`/employees/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(getInitialData())
                props.history.push('/employees')
            })
    }
}

export const removeEmployee = (id, props) => {
    return dispatch => {
        axios.delete(`/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(getInitialData())
                props.history.push('/employees')
            })
    }
}
