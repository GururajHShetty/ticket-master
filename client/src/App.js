import React from 'react';
import './App.css'
import { Badge } from 'reactstrap'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import TicketMasterDashboard from './components/Dashboard'

import CustomerList from './components/customers/List'
import CustomerShow from './components/customers/Show'
import CustomerEdit from './components/customers/Edit'

import DepartmentList from './components/departments/List'

import EmployeesList from './components/Employees/List'
import EmployeeShow from './components/Employees/Show'

function App() {
  return (
    <div>
      <h2 className="App" ><Badge color="success">Ticket Master</Badge></h2>
      <BrowserRouter>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page"><Link to="/customers">Customers</Link></li>
            <li className="breadcrumb-item active" aria-current="page"><Link to="/departments">Departments</Link></li>
            <li className="breadcrumb-item active" aria-current="page"><Link to="/employees">Employees</Link></li>
            <li className="breadcrumb-item active" aria-current="page"><Link to="/customers">Tickets</Link></li>
          </ol>
        </nav>

        <Switch>
          <Route path="/" component={TicketMasterDashboard} exact={true} />
          <Route path="/customers/:id" component={CustomerShow} exact={true} />
          <Route path="/customers/edit/:id" component={CustomerEdit} />
          <Route path="/customers" component={CustomerList} />

          <Route path="/departments" component={DepartmentList}/>

          <Route path="/employees/:id" component={EmployeeShow} exact={true}/> 
          <Route path="/employees" component={EmployeesList}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
