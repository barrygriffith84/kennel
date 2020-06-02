import React, { Component } from 'react'
    //import the components we will need
    import EmployeeCard from './EmployeeCard'
    import EmployeeManager from '../../modules/EmployeeManager'

    class EmployeeList extends Component {
        //define what this component needs to render
        state = {
            employees: [],
        }

        deleteEmployee = id => {
            EmployeeManager.delete(id)
            .then(() => {
              EmployeeManager.getAll()
              .then((newEmployees) => {
                this.setState({
                    employees: newEmployees
                })
              })
            })
          }

    componentDidMount(){
        // console.log("EMPLOYEE LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        EmployeeManager.getAll()
        .then((employee) => {
            this.setState({
                employees: employee,
            })
        })
    }

    render(){
        // console.log("EMPLOYEE LIST: Render");
        return(
            <>
            <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/employees/new") }}>
                        Add Employee
                    </button>
                </section>
            <div className="container-cards">
                {this.state.employees.map((currentEmployeeInLoop) => {
                console.log("this is a current Employee in the loop", currentEmployeeInLoop)
                return <EmployeeCard key={currentEmployeeInLoop.id} employeeProp={currentEmployeeInLoop} removeEmployee={this.deleteEmployee}/>;
    })}
            </div>
            </>
        )
    }
}

export default EmployeeList