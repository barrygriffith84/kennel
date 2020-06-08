import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={window.location.origin + this.props.animal.image} className="icon--animal" alt="error" />
          </picture>
          <h3>Name: {" "}
             <span className="card-petname">{this.props.animal.name}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default AnimalCard;