import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./castle.jpg')} alt="Bob's Dog Palace" />
          </picture>
    <h3>Name: <span className="card-locationname">{this.props.locationProp.name}</span></h3>
    <button type="button" onClick={() => this.props.closeLocation(this.props.locationProp.id)}>Remove</button>
    <Link to={`/locations/${this.props.locationProp.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;