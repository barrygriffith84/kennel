import React, { Component } from 'react'
    //import the components we will need
    import LocationCard from './LocationCard'
    import LocationManager from '../../modules/LocationManager'

    class LocationList extends Component {
        //define what this component needs to render
        state = {
            locations: [],
        }

        deleteLocation = id => {
            LocationManager.delete(id)
            .then(() => {
              LocationManager.getAll()
              .then((newLocations) => {
                this.setState({
                    locations: newLocations
                })
              })
            })
          }

    componentDidMount(){
        // console.log("LOCATION LIST: ComponentDidMount");
        //getAll from LocationManager and hang on to that data; put it in state
        LocationManager.getAll()
        .then((locations) => {
            this.setState({
                locations: locations,
            })
        })
    }

    render(){
        // console.log("LOCATION LIST: Render");
        return(
            <>
            <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/location/new") }}>
                        New Location
                    </button>
                </section>
            <div className="container-cards">
                {this.state.locations.map((currentLocationInLoop) => {
                console.log("this is a current location in the loop", currentLocationInLoop)
                return <LocationCard key={currentLocationInLoop.id} locationProp={currentLocationInLoop} closeLocation={this.deleteLocation}/>;
    })}
            </div>
            </>
        )
    }
}

export default LocationList