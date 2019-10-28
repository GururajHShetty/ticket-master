import React from 'react'
import { connect } from 'react-redux'
import EmployeeForm from './Form'
import {updateEmployee} from '../../actions/employees'

class EmployeeEdit extends React.Component {

    handleSubmit = formData => {
        this.props.dispatch(updateEmployee(formData, this.props.employee._id,this.props))
    }

    render() {
        return (
            <div>
                {this.props.employee ? (<div>
                    <h4>Edit employee Info</h4>
                    <EmployeeForm employee={this.props.employee} handleSubmit={this.handleSubmit} />
                </div>
                ) : (
                <div className ="spinner-border text-success" role="status"></div>)}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        employee: state.employees.find(employee => employee._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EmployeeEdit)