import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./castle.jpg')} alt="Bob's Dog Palace" />
          </picture>
    <h3>Name: <span className="card-locationname">{this.props.locationProp.name}</span></h3>
        </div>
      </div>
    );
  }
}

export default LocationCard;