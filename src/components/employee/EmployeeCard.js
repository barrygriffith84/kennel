import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={window.location.origin + this.props.employeeProp.image} className="icon--employee" alt="error" />
          </picture>
          <h3>Name: <span className="card-employeename">{this.props.employeeProp.name}</span></h3>
        </div>
      </div>
    );
  }
}


export default EmployeeCard;