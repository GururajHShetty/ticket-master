import React from 'react'
import { connect } from 'react-redux'
import CustomerForm from './Form'
import { Spinner } from 'reactstrap'
import { updateCustomer } from '../../actions/customer'

class CustomerEdit extends React.Component {

    handleSubmit = formData => {
        this.props.dispatch(updateCustomer(formData, this.props.customer._id))
        this.props.history.push('/customers')
    }

    render() {
        return (
            <div>
                {this.props.customer ? (<div>
                    <h4>Edit Customer Info</h4>
                    {/* {console.log(this.props.customer, 'edit',this.props.match.params.id)} */}
                    <CustomerForm customer={this.props.customer} handleSubmit={this.handleSubmit} />
                </div>
                ) : (<div className="App" ><Spinner color="success" /></div>)}

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        customer: state.customers.find(customer => customer._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(CustomerEdit)