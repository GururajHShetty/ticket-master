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