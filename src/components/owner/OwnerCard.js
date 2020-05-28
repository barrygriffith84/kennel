import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./poodle-bob.png')} alt="Poodle Bob" />
          </picture>
          <h3>Name: <span className="card-owndername">Poodle Bob</span></h3>
          <p>Title: Owner/Manager/Dog Groomer/ Dog Trainer/ Friend of All Dogs</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;