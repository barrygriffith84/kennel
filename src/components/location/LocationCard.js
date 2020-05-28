import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./castle.jpg')} alt="Location" />
          </picture>
          <h3>Name: <span className="card-locationname">Bob's Dog Palace</span></h3>
          <p>Location: Grayson Ky</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;