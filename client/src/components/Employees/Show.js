import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {removeEmployee} from '../../actions/employees'

function EmployeeShow(props) {

    const handleRemove = id => {
        props.dispatch(removeEmployee(id,props))
    }

    return (
        <div>
            <h4>Employee Information</h4>
            {props.employee ? (
                <div>
                    <h6>Name : {props.employee.name}</h6>
                    <h6>Email : {props.employee.email}</h6>
                    <h6>Phone : {props.employee.mobile}</h6>
                    <Link className="btn btn-success" to={`/employee/edit/${props.employee._id}`}>Edit</Link>
                    <button className="btn btn-danger" onClick={(e) => {
                        handleRemove(props.employee._id)
                    }}>Remove</button>
                </div>) : (
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>)
            }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        employee: state.employees.find(employee => employee._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EmployeeShow)