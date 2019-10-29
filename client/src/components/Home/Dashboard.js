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
                            "#5E82E6",
                            "#FDB45C",
                            "#03FC2C"
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

    componentWillUnmount(){
        this.setState({dataPie:{}})
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