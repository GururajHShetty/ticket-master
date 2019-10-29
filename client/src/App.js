import React from 'react';
import './App.css'
import { Badge } from 'reactstrap'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'

import UserRegistration from './components/Users/Registration'
import UserLogin from './components/Users/Login'
import UserLogout from './components/Users/Logout'

// import TicketMasterDashboard from './components/Dashboard'
import HomePage from './components/Home/Home'

import CustomerList from './components/customers/List'
import CustomerShow from './components/customers/Show'
import CustomerEdit from './components/customers/Edit'
import { connect } from 'react-redux'


import DepartmentList from './components/departments/List'

import EmployeesList from './components/Employees/List'
import EmployeeShow from './components/Employees/Show'
import EmployeeEdit from './components/Employees/Edit'

import TicketList from './components/Tickets/List'
import TicketShow from './components/Tickets/Show'
import TicketEdit from './components/Tickets/Edit'
import TicketResolvedList from './components/Tickets/ResolvedList'

function App(props) {
  return (
    <div className="container" >
      <h2><Badge color="success">Ticket Master</Badge></h2>
      <BrowserRouter>
        {
          isEmpty(props.user) ? (
            <div>
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page"><Link to="/">Registor</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/users/login">Login</Link></li>
              </ol>
            </div>) : (
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page"><Link to="/home">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page"><Link to="/customers">Customers</Link></li>
                  <li className="breadcrumb-item active" aria-current="page"><Link to="/departments">Departments</Link></li>
                  <li className="breadcrumb-item active" aria-current="page"><Link to="/employees">Employees</Link></li>
                  <li className="breadcrumb-item active" aria-current="page"><Link to="/tickets">Tickets</Link></li>
                  <li className="breadcrumb-item active" aria-current="page"><Link to="/users/logout">Logout</Link></li>
                </ol>
              </nav>)
        }



        <Switch>
          <Route path="/" component={UserRegistration} exact={true} />
          <Route path="/users/login" component={UserLogin} exact={true} />
          <Route path="/users/logout" component={UserLogout}/>

          <Route path="/home" component={HomePage} />

          <Route path="/customers/:id" component={CustomerShow} exact={true} />
          <Route path="/customers/edit/:id" component={CustomerEdit} />
          <Route path="/customers" component={CustomerList} />

          <Route path="/departments" component={DepartmentList} />

          <Route path="/employees/:id" component={EmployeeShow} exact={true} />
          <Route path="/employee/edit/:id" component={EmployeeEdit} exact={true} />
          <Route path="/employees" component={EmployeesList} />

          <Route path="/tickets/resolved" component={TicketResolvedList} exact={true}/>
          <Route path="/tickets/:id" component={TicketShow} exact={true} />
          <Route path="/ticket/edit/:id" component={TicketEdit} exact={true} />
          <Route path="/tickets" component={TicketList}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
