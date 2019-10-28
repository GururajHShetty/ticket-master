import axios from '../config/axios'
import { getInitialData } from './InitialData'
import { setErrors } from './errors'

export const setDepartments = departments => {
    return {
        type: 'SET_DEPARTMENTS',
        payload: departments
    }
}

export const removeDepartment = id => {
    return dispatch => {
        axios.delete(`/departments/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(getInitialData())
            })
    }
}

export const addDepartment = formData => {
    return dispatch => {
        axios.post(`/departments`, formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    dispatch(setErrors(response.data.errors, 'department'))
                } else {
                    dispatch(getInitialData())
                }
            })
    }
}