import React, { Component } from 'react';


class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={window.location.origin + this.props.animalProp.image} className="icon--animal" alt="error" />
          </picture>
          <h3>Name: {" "}
             <span className="card-petname">{this.props.animalProp.name}</span></h3>
          <p>Breed: {this.props.animalProp.breed}</p>
          <button type="button" onClick={()=> this.props.dischargeAnimal(this.props.animalProp.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;