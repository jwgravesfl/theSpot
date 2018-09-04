import React, { Component } from 'react'

import { Container, Button, Form, Label, Input } from 'reactstrap'

import styled from 'styled-components'

import firebase from '../firebase/firebase'

const AddSpotDiv = styled.div `

  .asContainer {
    max-width: 900px;
  }

  #labelAddSpot {
    font-family: 'Anton', sans-serif;
    font-size: 1.5em;
    text-align: center;
    width: 100%;
  }

  .cityZipCommFormGroup {
 
    width: 30%;
  }

  .zipCommFormGroup {
    margin-left: 5%;
  }

  .asLabel {
  }


  .asInput {
  }

  .asSelect {
  }

  .asButton {
    margin-top: 2vh;
  }
`

export default class AddSpot extends Component {
    constructor() {
        super();
            this.state = {
              CompanyName: '',
              Address: '',
              City: '',
              ZIPCode: '',
              Neighborhood: '',
              PhoneNumberCombined: '',
              FaxNumberCombined: '',
              Website: '',
              Twitter: '',
              Facebook: '',
              GooglePlus: '',
              category: '',
              subCategory: '',
              theSpotScore: '',
              email: '',
              eventCoordinatorName: '',
              eventCoordinatorEmail: '',
              lastUpdatedOn: '',
              spots: []
            }
            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleChange = this.handleChange.bind(this)
          }

          handleChange(e) {
            this.setState({
              [e.target.name]: e.target.value
            });
          }
    
          handleSubmit(e) {
            e.preventDefault();
            const spotsRef = firebase.database().ref('spots');
            const spot = {
              CompanyName: this.state.CompanyName,
              Address: this.state.Address,
              City: this.state.City,
              ZIPCode: this.state.ZIPCode,
              Neighborhood: this.state.Neighborhood,
              PhoneNumberCombined: this.state.PhoneNumberCombined,
              Website: this.state.Website,
              Twitter: this.state.Twitter,
              Facebook: this.state.Facebook,
              GooglePlus: this.state.GooglePlus,
              category: this.state.category,
              subCategory: this.state.subCategory,
              email: this.state.email,
            }
            spotsRef.push(spot);
            this.setState({
              CompanyName: '',
              Address: '',
              City: '',
              ZIPCode: '',
              Neighborhood: '',
              PhoneNumberCombined: '',
              FaxNumberCombined: '',
              Website: '',
              Twitter: '',
              Facebook: '',
              GooglePlus: '',
              category: '',
              subCategory: '',
              theSpotScore: '',
              email: '',
              eventCoordinatorName: '',
              eventCoordinatorEmail: '',
            });
          }

  render() {
    return (
      <AddSpotDiv>
        <Container
          className="asContainer"
        >
          <Form onSubmit={this.handleSubmit}>
          <Label
            id="labelAddSpot"  
          >
            Add Spot
          </Label>
            <div>
              <Label 
                for="CompanyName"
                className="asLabel"
              >Spot Name</Label>
              <Input
                type="text" 
                name="CompanyName" 
                placeholder="CompanyName"
                id="CompanyName" 
                onChange={this.handleChange} 
                value={this.state.CompanyName}
                className="asInput"
              />
            </div>
            <div className="row">
              <div className="col">
                <Label 
                  for="Address"
                  className="asLabel"
                >Street Address (123 Example Ave)</Label>
                <Input
                  type="text" 
                  name="Address" 
                  placeholder="Address"
                  id="Address" 
                  onChange={this.handleChange} 
                  value={this.state.Address}
                  className="asInput"
                />
              </div>
              <div className="col">
              <Label 
                  for="email"
                  className="asLabel"
                >Email</Label>
                <Input
                  type="email" 
                  name="email" 
                  placeholder="email"
                  id="email" 
                  onChange={this.handleChange} 
                  value={this.state.email}
                  className="asInput"
                />
              </div>
            </div>
              <div className="row">
                <div className="col">
                  <Label 
                    for="City"
                    className="asLabel"
                  >City</Label>
                  <Input
                    type="select" 
                    name="City" 
                    placeholder="City"
                    id="City" 
                    onChange={this.handleChange} 
                    value={this.state.City}
                    className="asSelect"
                  >
                    <option>City</option>
                    <option>Colorado Springs</option>
                    <option>Manitou Springs</option>
                    <option>Fountain</option>
                    <option>Fort Collins</option>
                  </Input>
                </div>
                <div className="col">
                <Label 
                    for="ZIPCode"
                    className="asLabel"
                  >Zip Code</Label>
                  <Input
                    type="select" 
                    name="ZIPCode" 
                    placeholder="ZIPCode"
                    id="ZIPCode" 
                    onChange={this.handleChange} 
                    value={this.state.ZIPCode}
                    className="asSelect"
                  >
                    <option>Zip Code</option>
                    <option>80903</option>
                    <option>80904</option>
                    <option>80905</option>
                    <option>80906</option>
                  </Input>
                </div>
                <div className="col">
                <Label 
                    for="Neighborhood"
                    className="asLabel"
                  >Neighborhood</Label>
                  <Input
                    type="select" 
                    name="Neighborhood" 
                    placeholder="Neighborhood"
                    id="Neighborhood" 
                    onChange={this.handleChange} 
                    value={this.state.Neighborhood}
                    className="asSelect"
                  >
                    <option>Neighborhood</option>
                    <option>Downtown Colorado Springs</option>
                    <option>Manitou Springs</option>
                    <option>Old Colorado City</option>
                    <option>Westside</option>
                  </Input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Label 
                      for="PhoneNumberCombined"
                      className="asLabel"
                    >Phone Number Including Area Code</Label>
                    <Input
                      type="tel" 
                      name="PhoneNumberCombined" 
                      placeholder="PhoneNumberCombined"
                      id="PhoneNumberCombined" 
                      onChange={this.handleChange} 
                      value={this.state.PhoneNumberCombined}
                      className="asInput"
                    />
                </div>
                <div className="col">
                  <Label 
                      for="FaxNumberCombined"
                      className="asLabel"
                    >Fax Number Including Area Code</Label>
                    <Input
                      type="tel" 
                      name="FaxNumberCombined" 
                      placeholder="FaxNumberCombined"
                      id="FaxNumberCombined" 
                      onChange={this.handleChange} 
                      value={this.state.FaxNumberCombined}
                      className="asInput"
                    />
                </div>
              </div>
        
              <div className="row">
                <div className="col">
                  <Label 
                      for="Website"
                      className="asLabel"
                    >Website URL</Label>
                    <Input
                      type="url" 
                      name="Website" 
                      placeholder="Website"
                      id="Website" 
                      onChange={this.handleChange} 
                      value={this.state.Website}
                      className="asInput"
                    />
                </div>
                <div className="col">
                  <Label 
                      for="Facebook"
                      className="asLabel"
                    >Facebook URL</Label>
                    <Input
                      type="url" 
                      name="Facebook" 
                      placeholder="Facebook"
                      id="Facebook" 
                      onChange={this.handleChange} 
                      value={this.state.Facebook}
                      className="asInput"
                    />
                </div>
              </div>
         
              <div className="row">
                <div className="col">
                  <Label 
                      for="Twitter"
                      className="asLabel"
                    >Twitter URL</Label>
                    <Input
                      type="url" 
                      name="Twitter" 
                      placeholder="Twitter"
                      id="Twitter" 
                      onChange={this.handleChange} 
                      value={this.state.Twitter}
                      className="asInput"
                    />
                </div>
                <div className="col">
                  <Label 
                      for="GooglePlus"
                      className="asLabel"
                    >GooglePlus URL</Label>
                    <Input
                      type="url" 
                      name="GooglePlus" 
                      placeholder="GooglePlus"
                      id="GooglePlus" 
                      onChange={this.handleChange} 
                      value={this.state.GooglePlus}
                      className="asInput"
                    />
                </div>
              </div>

            <div className="row">
              <div className="col">
                <Label 
                    for="category"
                    className="asLabel"
                  >Category</Label>
                  <Input
                    type="url" 
                    name="category" 
                    placeholder="category"
                    id="category" 
                    onChange={this.handleChange} 
                    value={this.state.category}
                    className="asInput"
                  />
              </div>
              <div className="col">
                <Label 
                    for="subCategory"
                    className="asLabel"
                  >SubCategory</Label>
                  <Input
                    type="url" 
                    name="subCategory" 
                    placeholder="subCategory"
                    id="subCategory" 
                    onChange={this.handleChange} 
                    value={this.state.subCategory}
                    className="asInput"
                  />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Label 
                    for="eventCoordinatorName"
                    className="asLabel"
                  >Event Coordinator Name</Label>
                  <Input
                    type="url" 
                    name="eventCoordinatorName" 
                    placeholder="Event Coordinator Name"
                    id="eventCoordinatorName" 
                    onChange={this.handleChange} 
                    value={this.state.eventCoordinatorName}
                    className="asInput"
                  />
              </div>
              <div className="col">
                <Label 
                    for="eventCoordinatorEmail"
                    className="asLabel"
                  >Event Coordinator Email</Label>
                  <Input
                    type="url" 
                    name="eventCoordinatorEmail" 
                    placeholder="Event Coordinator Email"
                    id="eventCoordinatorEmail" 
                    onChange={this.handleChange} 
                    value={this.state.eventCoordinatorEmail}
                    className="asInput"
                  />
              </div>
            </div>
              

            <Button
              className="asButton"  
              >
              Add Spot
            </Button>
          </Form>
        </Container>
      </AddSpotDiv>
    )
  }
}
