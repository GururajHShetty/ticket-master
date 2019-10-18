import React from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'

function CustomerShow(props) {
  return (
    <div>
      <h4>Customer Information</h4>
      {props.customer ? (
        <div>
          <h6>Name : {props.customer.name}</h6>
          <h6>Email : {props.customer.email}</h6>
          <h6>Phone : {props.customer.mobile}</h6>
          <Link to={`/customers/edit/${props.customer._id}`}>Edit</Link> |
          <Link to={`customers/remove/${props.customer._id}`} >Remove</Link>
        </div>
      ) : (<div className="App"><Spinner color="success" /></div>)}

    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    customer: state.customers.find(customer => customer._id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(CustomerShow)