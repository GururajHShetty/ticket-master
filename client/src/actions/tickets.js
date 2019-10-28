import axios from '../config/axios'
import { getInitialData } from './InitialData'
import { setErrors } from './errors'

export const setTickets = tickets => {
    return {
        type: 'SET_TICKETS',
        payload: tickets
    }
}

export const startSetCustomer = formData => {
    return dispatch => {
        axios.post('/tickets', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    dispatch(setErrors(response.data.errors, 'tickets'))
                } else {
                    dispatch(getInitialData())
                }
            })
    }
}

export const removeTicket = (id) => {
    return dispatch => {
        axios.delete(`/tickets/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
        .then(response => {
            dispatch(getInitialData())
        })
    }
}