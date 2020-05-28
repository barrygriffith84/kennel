import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./slick-rick.png')} alt="Slick Rick" />
          </picture>
          <h3>Name: <span className="card-employeename">Slick Rick</span></h3>
          <p>Title: Hustler</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;