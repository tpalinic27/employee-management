import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card text-center">
                    <div class="card-header">
                        Employee details
                    </div>
                    <div className = "card-body card-center">
                        <div className = "row">
                            <b><label>  First Name: </label></b>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                        <b><label>  Last Name: </label></b>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <b><label>  Email :  </label></b>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;