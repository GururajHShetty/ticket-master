import React from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import {clearErrors} from '../../actions/errors' 


class TicketForm extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            priority: '',
            department: '',
            employee: '',
            customer: '',
            employeeOnDept:[]
        }
    }

    handleChange = e => {
        console.log('change',e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearErrors())
    }

    handleSubmit = e => {
        e.preventDefault()
        const formData = {
            title: this.state.title,
            description: this.state.description,
            priority: this.state.priority,
            department: this.state.department,
            employee: this.state.employee,
            customer: this.state.customer,
        }
        this.props.handleSubmit(formData)
    }

    handleSelect = e => {
        const employeeOnDept = this.props.employees.filter(employee => {
            return employee.department._id === e.target.value
        })
        console.log('select',employeeOnDept)
        this.setState({employeeOnDept})
    }

    render() {
        console.log('render')
        return (
            <div>
                {
                    !isEmpty(this.props.errors) && (
                        <div className="alert alert-danger" role="alert">
                            <ul>
                                {
                                    Object.entries(this.props.errors).map((error, i) => {
                                        return (<li key={i} >{error[0]} : {error[1].message}</li>)
                                    })
                                }
                            </ul>
                        </div>)
                }
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" value={this.state.title} name="title" onChange={this.handleChange} placeholder="Subject of your concern" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea type="text" className="form-control" id="description" value={this.state.description} name="description" onChange={this.handleChange} placeholder="Explain your concern" />
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="high" name="priority" value="High" onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="high">High</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="medium" name="priority" value="Medium" onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="medium">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="low" name="priority" value="Low" onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="low">Low</label>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="customer">Customer</label>
                        <select className="form-control" id="customer" onChange={this.handleChange} name="customer" >
                            <option>select</option>
                            {
                                this.props.customers.map(customer => <option key={customer._id} value={customer._id} >{customer.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <select className="form-control" id="department" onBlur={this.handleSelect} onChange={this.handleChange} name="department" >
                            <option>select</option>
                            {
                                this.props.departments.map(department => <option key={department._id} value={department._id} >{department.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Employee</label>
                        <select className="form-control" id="employee" onChange={this.handleChange} name="employee" >
                            <option>select</option>
                            {
                                this.state.employeeOnDept.map(employee => <option key={employee._id} value={employee._id} >{employee.name}</option>)
                            }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        departments: state.departments,
        employees: state.employees,
        customers: state.customers,
        errors: state.formErrors.tickets
    }
}

export default connect(mapStateToProps)(TicketForm)