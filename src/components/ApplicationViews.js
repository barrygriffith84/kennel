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
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'

class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          console.log({...props})
          return <AnimalList {...props}/>
        }} />
        <Route exact path="/location" render={(props) => {
          return <LocationList {...props}/>
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList {...props}/>
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList {...props}/>
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          console.log("this is props from application views", props)
          return <AnimalDetail animalId={props.match.params.animalId} />
        }} />
         <Route path="/locations/:locationId(\d+)" render={(props) => {
          console.log("this is props from application views", props)
          return <LocationDetail locationId={props.match.params.locationId} />
        }} />

        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props}/>
        }} />
         <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props}/>
        }} />
          <Route path="/location/new" render={(props) => {
          return <LocationForm {...props}/>
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props}/>
        }} />
      </>
    )
  }
}

export default ApplicationViews