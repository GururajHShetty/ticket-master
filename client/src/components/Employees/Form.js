import React from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import {clearErrors} from '../../actions/errors' 


class EmployeeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.employee ? this.props.employee.name : '',
            email: this.props.employee ? this.props.employee.email : '',
            mobile:this.props.employee ? this.props.employee.mobile : '',
            department: ''
        }
    }

    handleChange = e => {
        // console.log(e.target.value,[e.target.name])
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
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department
        }
        // console.log('handleSubmt',formData)
        this.props.handleSubmit(formData)
        this.setState({
            name: '',
            email: '',
            mobile: '',
            department: ''
        })
    }

    render() {
        return (
            <div className="container" >
                {
                        !isEmpty(this.props.errors) && (
                        <div className="alert alert-danger" role="alert">
                            <ul>
                                {
                                    Object.entries(this.props.errors).map((error,i) => {
                                        return (<li key={i} >{error[0]} : {error[1].message}</li>)
                                    })
                                }
                            </ul>
                        </div>)
                    }
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={this.state.name} id="name" name="name" onChange={this.handleChange} placeholder="Enter your name" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" value={this.state.email} id="email" name="email" onChange={this.handleChange} placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" className="form-control" value={this.state.mobile} id="mobile" name="mobile" onChange={this.handleChange} placeholder="Enter your mobile" />
                    </div>
                    <div>
                        <label htmlFor="mobile">Department</label>
                        <select className="form-control" id="department" onChange={this.handleChange} name="department" >
                            <option>select</option>
                            {
                                this.props.departments.map(department => <option key={department._id} value={department._id} >{department.name}</option>)
                            }
                        </select>
                    </div><br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        departments: state.departments,
        errors : state.formErrors.employee
    }
}

export default connect(mapStateToProps)(EmployeeForm)