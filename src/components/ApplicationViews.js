import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import EmployeeList from './employee/EmployeeList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'



class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/location" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          console.log("this is props from application views", props)
          return <AnimalDetail animalId={props.match.params.animalId} />
        }} />
         <Route path="/locations/:locationId(\d+)" render={(props) => {
          console.log("this is props from application views", props)
          return <LocationDetail locationId={props.match.params.locationId} />
        }} />
      </>
    )
  }
}

export default ApplicationViews