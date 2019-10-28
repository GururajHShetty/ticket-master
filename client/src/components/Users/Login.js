import React from 'react'
import { connect } from 'react-redux'
import { startSetUser } from '../../actions/user'
import isEmpty from 'lodash/isEmpty'

class UserLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isVisible: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheck = e => {
        if (this.state.isVisible) {
            this.setState({ isVisible: false })
        } else {
            this.setState({ isVisible: true })
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        // console.log(formData)
        this.props.dispatch(startSetUser(formData, this.props))
    }

    render() {
        return (
            <div>
                <div >
                    <div className="col-md-4 offset-md-4 container">
                        <h4 className="col-md-3 offset-md-3"><span className="badge badge-light">Login to your account</span></h4><hr />
                        {
                            !isEmpty(this.props.errors) && (
                                <div className="alert alert-danger" role="alert">
{                                    console.log(this.props.errors)
}                                    <ul className ="list-unstyled" >
                                        {
                                            Object.entries(this.props.errors).map((error, i) => {
                                                return (<li key={i} >{error[1]}</li>)
                                            })
                                        }
                                    </ul>
                                </div>)
                        }
                        <form onSubmit={this.handleSubmit} >
                            <div className=" input-group-text row">
                                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="email" onChange={this.handleChange} placeholder="someone@email.com" name="email" value={this.state.email} />
                                </div>
                            </div>
                            <div className="input-group-text row">
                                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type={this.state.isVisible ? "text" : "password"} className="form-control" id="password" onChange={this.handleChange} placeholder="Password" name="password" value={this.state.password} />
                                </div>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="isVisible" name="isVisible" onChange={this.handleCheck} />
                                <label className="form-check-label" htmlFor="isVisible">Show password</label>
                            </div>
                            <input type="submit" value="Login" className="btn btn-success btn-lg btn-block" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        errors: state.formErrors.userLogin
    }
}

export default connect(mapStateToProps)(UserLogin)