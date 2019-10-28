import { setCustomers } from './customer'
import axios from '../config/axios'
import { setDepartments } from './department'
import { setEmployees } from './employees'
import { setUser } from './user'
import { setTickets } from './tickets'


export const getInitialData = () => {
    console.log('initial')
    return dispatch => {
        Promise.all([axios.get("/customers", {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }), axios.get("/departments", {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }), axios.get("/employees", {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }), axios.get('/users/account', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }), axios.get('/tickets', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })])
            .then(value => {
                const [customers, departments, employees, user, tickets] = value
                // console.log(value)
                dispatch(setUser(user))
                dispatch(setCustomers(customers.data))
                dispatch(setDepartments(departments.data))
                dispatch(setEmployees(employees.data))
                dispatch(setUser(user))
                dispatch(setTickets(tickets.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}