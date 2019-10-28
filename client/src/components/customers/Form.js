import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import {clearErrors} from '../../actions/errors'

class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.customer ? this.props.customer.name : '',
            email: this.props.customer ? this.props.customer.email : '',
            mobile:this.props.customer ? this.props.customer.mobile : ''
        }
    }

    handleChange = e => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.handleSubmit(formData)
        this.setState({
            name:'',
            email:'',
            mobile:''
        })
    }
    
    componentWillUnmount(){
        this.props.dispatch(clearErrors())
    }

    render() {
        // {console.log(this.props.customer)}
        return (
            <div>
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
                <Form onSubmit={this.handleSubmit}>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="name" name="name" onChange={this.handleChange} value={this.state.name} id="name" placeholder="name" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" onChange={this.handleChange} value={this.state.email} id="email" placeholder="someone@mail.com" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="mobile">Mobile</Label>
                            <Input type="mobile" name="mobile" onChange={this.handleChange} value={this.state.mobile} id="mobile" placeholder="1234567890" />
                        </FormGroup>
                    </Col>
                    <Button>Add Customer</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        errors : state.formErrors.customer
    }
}

export default connect(mapStateToProps)(CustomerForm)