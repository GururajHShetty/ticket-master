import axios from '../config/axios'
import { getInitialData } from './InitialData'

export const setDepartments = departments => {
    return {
        type: 'SET_DEPARTMENTS',
        payload: departments
    }
}

export const removeDepartment = id => {
    return dispatch => {
        axios.delete(`/departments/${id}`)
            .then(response => {
                dispatch(getInitialData())
            })
    }
}

export const addDepartment = formData => {
    return dispatch => {
        axios.post(`/departments`, formData)
            .then(response => {
                dispatch(getInitialData())
            })
    }
}