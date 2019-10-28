import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getInitialData } from './actions/InitialData'
// import { startGetUser, startRedirect } from './actions/user'

const store = configureStore()

// console.log(store.getState())

// store.subscribe(() => {
//     console.log(store.getState(), 'reload')
// })

if (localStorage.getItem('token')) {
    console.log('reloading')
    store.dispatch(getInitialData())
    // store.dispatch(startGetUser())
}

const ele = (
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDom.render(ele, document.getElementById('root'))