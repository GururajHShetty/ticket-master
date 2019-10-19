import React from 'react'
import { addDepartment } from '../../actions/department'
import { connect } from 'react-redux'

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
        this.setState({name:''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" onChange={this.handleChange} value={this.state.name} id="name" name="name" placeholder="department name" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

export default connect()(DepartmentForm)