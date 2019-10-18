import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getInitialData } from './actions/customer'

const store = configureStore()

// console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getInitialData())

const ele = (
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDom.render(ele, document.getElementById('root'))