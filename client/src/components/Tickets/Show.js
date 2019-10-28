import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeTicket } from '../../actions/tickets'

class TicketShow extends React.Component {

    handleRemove = id => {
        // console.log(id)
        this.props.dispatch(removeTicket(id))
        this.props.history.push('/tickets')

    }

    render() {
        return (
            <div className="container" >
                <div className="row">
                    {
                        this.props.ticket && (
                            <div className="col-md-10 offset-md-1">
                                <form onSubmit={this.handleSubmit} >
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" className="form-control" id="title" value={this.props.ticket.title} readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea type="text" className="form-control" id="description" value={this.props.ticket.description} readOnly />
                                    </div>
                                    <div className="row" >
                                        <div className="col-md-5" >
                                            <div className="form-group">
                                                <label htmlFor="status">Status</label>
                                                <input type="text" className="form-control" id="status" value={this.props.ticket.status} readOnly />
                                            </div>
                                        </div>
                                        <div className="col-md-5" >
                                            <div className="form-group">
                                                <label htmlFor="department">Department</label>
                                                <input type="text" className="form-control" id="department" value={this.props.ticket.department.name} readOnly />
                                            </div>
                                        </div>
                                        <div className="col-md-5" >
                                            <div className="form-group">
                                                <label htmlFor="customer">Customer</label>
                                                <input type="text" className="form-control" id="customer" value={this.props.ticket.customer.name} readOnly />
                                            </div>
                                        </div>
                                        <div className="col-md-5" >
                                            <div className="form-group">
                                                <label htmlFor="employee">Employee</label>
                                                <input type="text" className="form-control" id="employee" value={this.props.ticket.employee.name} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="resolution">Resolution</label>
                                        <textarea type="text" className="form-control" id="resolution" value={this.props.ticket.resolution} name="resolution" onChange={this.handleChange} placeholder="resolution" readOnly/>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Link className="btn btn-success" to={`/ticket/edit/${this.props.ticket._id}`}>Update</Link>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <button className="btn btn-danger" onClick={(e) => {
                                            this.handleRemove(this.props.ticket._id)
                                        }}>Reject</button>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        ticket: state.tickets.find(ticket => ticket._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(TicketShow)