import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css';
import EmployeeManager from '../../modules/EmployeeManager'

class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        employeeId: "",
        employees: [],
        loadingStatus: false,
    };

componentDidMount() {
    EmployeeManager.getAll().then(employees => 
        this.setState(
        {
            employees: employees
        }
    ))
}

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                employeeId: this.state.employeeId,
            };

            // Create the animal and redirect user to animal list
            AnimalManager.post(animal)
                .then(() => this.props.history.push("/animals"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="animalName"
                                placeholder="Animal name"
                            />
                            <label htmlFor="animalName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="breed"
                                placeholder="Breed"
                            />
                            <label htmlFor="breed">Breed</label>
                            <label htmlFor="employeeId">Employee ID</label>
                            <select
                                className="form-control"
                                placeholder="Employee"
                                id="employeeId"
                                value={this.state.employeeId}
                                onChange={this.handleFieldChange}
                            >
                                {this.state.employees.map(employee =>
                                    <option key={employee.id} value={employee.id}>
                                        {employee.name}
                                    </option>
                                )}
                            </select>


                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewAnimal}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AnimalForm