import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={window.location.origin + this.props.ownerProp.image} className="icon--owner" alt="error" />
          </picture>
          <h3>Name: <span className="card-ownername">{this.props.ownerProp.name}</span></h3>
          <button type="button" onClick={() => { this.props.history.push(`/owners/${this.props.ownerProp.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.props.removeOwner(this.props.ownerProp.id)}>Remove</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;