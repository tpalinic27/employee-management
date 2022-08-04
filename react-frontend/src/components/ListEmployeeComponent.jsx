import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({forceRefresh:true});
class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    editEmployee(id){
        history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    addEmployee(){
        history.push('/add-employee/_add');
    }
    viewEmployee(id){
        history.push(`/view-employee/${id}`);
    }
    render() {
        return (
            <div>
                 <h2 className="text-center"></h2>
                 <br></br>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-borderless ">
                            <thead>
                                <tr>
                                    <th>  First Name</th>
                                    <th>  Last Name</th>
                                    <th>  Email </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td>
                                                <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info"> Update </button> 
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger"> Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={() => this.viewEmployee(employee.id)} className="btn btn-info"> View </button> 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent;