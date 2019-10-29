import React from 'react'
import { connect } from 'react-redux'

class Resource extends React.Component {
    constructor() {
        super()
        this.state = {
            inpTickets: '',
            openTickets: '',
            pwcTickets: '',
            resolvedTickets: '',
            holdTickets: '',
            customers: '',
            departments: '',
            employees: ''
        }
    }

    componentDidMount() {
        const inpTickets = this.props.tickets.filter(ticket => ticket.status === "In progress")
        const openTickets = this.props.tickets.filter(ticket => ticket.status === "Open")
        const pwcTickets = this.props.tickets.filter(ticket => ticket.status === "Pending with customer")
        const resolvedTickets = this.props.tickets.filter(ticket => ticket.status === "Resolved")
        const holdTickets = this.props.tickets.filter(ticket => ticket.status === "Hold")
        setTimeout(() => {
            this.setState({ 
                customers : this.props.customers.length,
                inpTickets : inpTickets.length,
                openTickets : openTickets.length,
                pwcTickets : pwcTickets.length,
                resolvedTickets : resolvedTickets.length,
                holdTickets : holdTickets.length,
                departments : this.props.departments.length,
                employees : this.props.employees.length,
             })
        }, 2000);
    }

    render() {
        return (
            <div >
                {
                    this.state.customers ? (
                        <div className="row">
                            <div className="card col-md-6" >
                                <div className="card-body">
                                    <h5 className="card-title">Customers</h5>
                                    <p className="card-text">Number of customers - {this.state.customers}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="card col-md-6" >
                                <div className="card-body">
                                    <h5 className="card-title">Employees</h5>
                                    <p className="card-text">Number of employees - {this.state.employees}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="card col-md-6" >
                                <div className="card-body">
                                    <h5 className="card-title">Departments</h5>
                                    <p className="card-text">Number of departments - {this.state.departments}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="card col-md-6" >
                                <div className="card-body">
                                    <h5 className="card-title">Tickets</h5>
                                    <p className="card-text">Inprogress - {this.state.inpTickets}</p>
                                    <p className="card-text">Open - {this.state.openTickets}</p>
                                    <p className="card-text">On Hold - {this.state.holdTickets}</p>
                                    <p className="card-text">Pending with customer - {this.state.pwcTickets}</p>
                                    <p className="card-text">Resolved - {this.state.resolvedTickets}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                            <div className="offset-md-3">
                                <div className="spinner-grow text-primary" role="status">
                                </div>
                                <div className="spinner-grow text-secondary" role="status">
                                </div>
                                <div className="spinner-grow text-success" role="status">
                                </div>
                                <div className="spinner-grow text-danger" role="status">
                                </div>
                                <div className="spinner-grow text-warning" role="status">
                                </div>
                                <div className="spinner-grow text-info" role="status">
                                </div>
                                <div className="spinner-grow text-dark" role="status">
                                </div>
                            </div>
                        )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tickets: state.tickets,
        customers: state.customers,
        departments: state.departments,
        employees: state.employees
    }
}

export default connect(mapStateToProps)(Resource)