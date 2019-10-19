import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CustomerForm from './Form'
import { setCustomer } from '../../actions/customer'

class CustomerList extends React.Component {

    handleSubmit = formData => {
        this.props.dispatch(setCustomer(formData, this.props))
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 mb-4">
                    <h4>Listing Customers - {this.props.customers.length}</h4>
                    <table className="table table-bordered table-striped">
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
                                this.props.customers.map((customer, index) => {
                                    return <tr key={customer._id} >
                                        <td>{index + 1}</td>
                                        <td><Link to={`/customers/${customer._id}`} >{customer.name}</Link></td>
                                        <td>{customer.email}</td>
                                        <td>{customer.mobile}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <h4>Add Customer</h4>
                    <CustomerForm className="col-md-4" handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customers
    }
}

export default connect(mapStateToProps)(CustomerList)
