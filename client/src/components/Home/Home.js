import React from 'react'
import TicketMasterDashboard from './Dashboard'
import { connect } from 'react-redux'
import Resource from './Resource'

function HomePage(props) {
    const data = []

    const inProgress = props.tickets.filter(ticket => ticket.status === 'In progress')
    const PendingWithCustomer = props.tickets.filter(ticket => ticket.status === 'Pending with customer')
    const hold = props.tickets.filter(ticket => ticket.status === 'Hold')
    const open = props.tickets.filter(ticket => ticket.status === 'Open')
    // console.log(inProgress, PendingWithCustomer, hold)

    data.push(inProgress.length)
    data.push(PendingWithCustomer.length)
    data.push(hold.length)
    data.push(open.length)
    // console.log(data)

    return (
        <div className="container" >
            {
                props.tickets.length > 0 && (
                    <div className="row" >
                        <div className="col-md-6"  >
                            <TicketMasterDashboard data={data} />
                        </div>
                        <div className="col-md-6">
                            <Resource />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps)(HomePage)