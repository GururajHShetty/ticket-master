import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function EmployeesList(props) {
    return (
        <div className="row" >
            <div className="col-md-6">
                <h4>Listing Employees - {props.employees.length}</h4>
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
                            props.employees.map((employee, index) => {
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
        </div>
    )
}

const mapStateToProps = state => {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(EmployeesList)