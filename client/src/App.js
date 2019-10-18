import React from 'react';
import './App.css'
import { Badge } from 'reactstrap'
import { Link, BrowserRouter, Route,Switch } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

import CustomerList from './components/customers/List'
import CustomerShow from './components/customers/Show'
import CustomerEdit from './components/customers/Edit'

function App() {
  return (
    <div>
      <h2 className="App" ><Badge color="success">Ticket Master</Badge></h2>
      <BrowserRouter>
        <Breadcrumb>
          <BreadcrumbItem active><Link to="/customers">Customers</Link></BreadcrumbItem>
        </Breadcrumb>

        <Switch>
        <Route path="/customers/:id" component={CustomerShow} exact={true} />
        <Route path="/customers/edit/:id" component={CustomerEdit}/>
        <Route path="/customers" component={CustomerList} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
