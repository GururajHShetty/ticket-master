import React from 'react'
import { connect } from 'react-redux'
import TicketForm from './Form'
import { updateTicket } from '../../actions/tickets'

class TicketEdit extends React.Component {

    handleSubmit = formData => {
        this.props.dispatch(updateTicket(formData, this.props.ticket._id, this.props))
    }

    render() {
        return (
            <div className="container" >
                {this.props.ticket ? (<div>
                    <h4>Edit ticket Info</h4>
                    <TicketForm ticket={this.props.ticket} handleSubmit={this.handleSubmit} />
                </div>
                ) : (
                        <div className="spinner-border text-success" role="status"></div>)}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        ticket: state.tickets.find(ticket => ticket._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(TicketEdit)