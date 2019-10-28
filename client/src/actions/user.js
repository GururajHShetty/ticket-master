import axios from '../config/axios'
import { setErrors } from './errors'
import {getInitialData} from './InitialData'

export const startAddUser = (formData, props) => {
    return dispatch => {
        // console.log(formData)
        axios.post('/users/registor', formData)
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    // console.log('errors',response.data.errors)
                    dispatch(setErrors(response.data.errors,'userRegistor'))
                } else {
                    // console.log(response.data)
                    props.history.push('/users/login')
                }
            })
    }

}

export const setUser = user => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const startSetUser = (formData, props) => {
    return dispatch => {
        axios.post('/users/login', formData)
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    // console.log(response.data)
                    dispatch(setErrors(response.data,'userLogin'))
                } else {
                    // console.log(response.data)
                    const { token } = response.data
                    localStorage.setItem('token', token)
                    dispatch(getInitialData())
                    props.history.push('/dashboard')
                }
            })
    }
}

// export const startGetUser = () => {
//     return dispatch => {
//     axios.get('/users/account',{
//         headers:{
//             'x-auth' : localStorage.getItem('token')
//         }
//     })
//     .then(response => {
//         const user = response.data
//         dispatch(setUser(user))
//     })}
// }

export const startRedirect = () => {
    return dispatch => {
    axios.get('/users/redirect')}
}