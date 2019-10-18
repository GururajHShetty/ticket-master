import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import {setCustomer} from '../../actions/customer'

class CustomerForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            mobile: ''
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
        this.props.dispatch(setCustomer(formData,this.props))
    }

    render() {
        return (
            <div>
                <h4>Add Customer</h4>
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

const mapStateToPrps = state => {
    return {
        customer: state.customers
    }
}

export default connect(mapStateToPrps)(CustomerForm)