import React from 'react'
import { connect } from 'react-redux'
import {removeDepartment} from '../../actions/department'

function DepartmentList(props) {

    const handleRemove = id => {
        props.dispatch(removeDepartment(id))
    }

    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6" >
                    <h4>Listing Departments -{props.departments.length}</h4>
                    <table className="table table-striped table-bordered" >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.departments.map((department, index) => {
                                    return (
                                        <tr key={department._id} >
                                            <td>{index + 1}</td>
                                            <td>{department.name}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => handleRemove(department._id)} >Remove</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        departments: state.departments
    }
}

export default connect(mapStateToProps)(DepartmentList)