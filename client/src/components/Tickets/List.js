import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TicketForm from './Form'
import {startSetCustomer} from '../../actions/tickets'

class TicketList extends React.Component {

    handleSubmit = formData => {
        this.props.dispatch(startSetCustomer(formData))
    }

    render() {
        return (
            <div className="container" >
                <h4>Listing Tickets - {this.props.tickets.length}</h4>
                <div className="row" >
                    <div className="col-md-8" >
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Department</th>
                                    <th>Employee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.tickets.map((tickets, index) => {
                                        return <tr key={tickets._id} >
                                            <td>{index + 1}</td>
                                            <td><Link to={`/tickets/${tickets._id}`} >{tickets.title}</Link></td>
                                            <td>{tickets.status}</td>
                                            <td>{tickets.priority}</td>
                                            <td>{tickets.department.name}</td>
                                            <td>{tickets.employee.name}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4" >
                            <TicketForm handleSubmit={this.handleSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps)(TicketList)