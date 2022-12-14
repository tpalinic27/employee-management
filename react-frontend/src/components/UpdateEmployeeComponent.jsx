import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import createBrowserHistory from 'history/createBrowserHistory'; 

const history = createBrowserHistory({forceRefresh:true});
class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log("employee => " + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            history.push("/employees");
        });
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }

    changeFirstNameHandler=(event) => {
            this.setState({firstName: event.target.value});
    }

    changeLastNameHandler=(event) => {
        this.setState({lastName: event.target.value});
    }
    
    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        history.push("/employees");
    }
    render() {
        return (
            <div>
                <br></br>
               
                <div className='container'>
                    
                    <div className='row'>
                    
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <br></br>
                    <br></br>
                    <br></br>
                            <h3 className='text-center'> Update Employee </h3>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group'>
                                            <label> First Name</label>
                                            <input placeholder='First name' name='firstName' className='form-control'
                                             value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className='form-group'>
                                            <label> Last Name</label>
                                            <input placeholder='Last name' name='lastName' className='form-control'
                                             value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className='form-group'>
                                            <label> Email Adress</label>
                                            <input placeholder='Email Adress' name='emailId' className='form-control'
                                             value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className='btn btn-success' onClick={this.updateEmployee}> Save </button>
                                        <button className='btn btn-danger' onClick={this.cancel} style={{marginLeft: "10px"}}> Cancel </button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;