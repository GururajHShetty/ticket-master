import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EmployeeForm from './Form'
import {startSetEmployee} from '../../actions/employees'

class EmployeesList extends React.Component {

    handleSubmit = formData => {
        this.props.dispatch(startSetEmployee(formData))
    }

    render() {
        return (
            <div className="container">
                <div className="row" >
                    <div className="col-md-8">
                        <h4>Listing Employees - {this.props.employees.length}</h4>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.employees.map((employee, index) => {
                                        return <tr key={employee._id} >
                                            <td>{index + 1}</td>
                                            <td><Link to={`/employees/${employee._id}`} >{employee.name}</Link></td>
                                            <td>{employee.email}</td>
                                            <td>{employee.mobile}</td>
                                            <td>{employee.department && employee.department.name}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4" >
                        <EmployeeForm handleSubmit={this.handleSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(EmployeesList)