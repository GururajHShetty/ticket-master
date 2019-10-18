import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import {Link} from 'react-router-dom'
import CustomerForm from './Form'

function CustomerList(props) {
    return (
        <div>
            <h4>Listing Customers - {props.customers.length}</h4>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        props.customers.map((customer, index) => {
                            return <tr key={customer._id} >
                                <th scope="row">{index}</th>
                                <td><Link to={`/customers/${customer._id}`} >{customer.name}</Link></td>
                                <td>{customer.email}</td>
                                <td>{customer.mobile}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <CustomerForm/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        customers: state.customers
    }
}

export default connect(mapStateToProps)(CustomerList)
