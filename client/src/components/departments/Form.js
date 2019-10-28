import React from 'react'
import { addDepartment } from '../../actions/department'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import {clearErrors} from '../../actions/errors'

class DepartmentForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const formData = {
            name: this.state.name
        }
        this.props.dispatch(addDepartment(formData))
        this.setState({ name: '' })
    }

    componentWillUnmount(){
        this.props.dispatch(clearErrors())
    }

    render() {
        return (
            <div className="container" >
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
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" onChange={this.handleChange} value={this.state.name} id="name" name="name" placeholder="department name" />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        errors : state.formErrors.department
    }
}

export default connect(mapStateToProps)(DepartmentForm)