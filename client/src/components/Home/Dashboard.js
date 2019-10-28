import React from 'react'
import { Pie } from "react-chartjs-2"
import { MDBContainer } from "mdbreact"

class TicketMasterDashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPie: {
                labels: ["In progress", "Pending with customer", "Hold","Open"],
                datasets: [
                    {
                        data: this.props.data,
                        backgroundColor: [
                            "#F7464A",
                            "#46BFBD",
                            "#FDB45C",
                            "#AC64AD"
                        ],
                        hoverBackgroundColor: [
                            "#FF5A5E",
                            "#5AD3D1",
                            "#FFC870",
                            "#DA92DB"
                        ]
                    }
                ]
            }
        }
    }

    render() {
        // console.log(this.props.tickets,'render')
        return (
            <div>
                        <MDBContainer>
                            <h3 className="mt-5">Tickets Dashboard</h3>
                            <Pie data={this.state.dataPie} options={{ responsive: true }} />
                        </MDBContainer>
                    </div>
        )
    }
}

export default TicketMasterDashboard