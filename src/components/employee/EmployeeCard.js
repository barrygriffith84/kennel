import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={window.location.origin + this.props.employee.image} className="icon--employee" alt="error" />
          </picture>
          <h3>Name: <span className="card-employeename">{this.props.employee.name}</span></h3>
          <button type="button" onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.props.removeEmployee(this.props.employee.id)}>Remove</button>
          <button type="button"
        onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}`) }}>Details</button>
        </div>
      </div>
    );
  }
}


export default EmployeeCard;