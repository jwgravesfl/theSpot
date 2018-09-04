import React, { Component } from 'react'

import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

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
    float: left;
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
              CompanyName: this.state.CompanyName
            }
            spotsRef.push(spot);
            this.setState({
              CompanyName: ''
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
          >Add Spot</Label>
            <FormGroup>
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
            </FormGroup>
            <FormGroup>
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
            </FormGroup>
            <FormGroup className="cityZipCommFormGroup">
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
                <option>Colorado Springs</option>
                <option>Manitou Springs</option>
                <option>Fountain</option>
                <option>Fort Collins</option>
              </Input>
            </FormGroup>
            <FormGroup className="cityZipCommFormGroup zipCommFormGroup">
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
                <option>Colorado Springs</option>
                <option>Manitou Springs</option>
                <option>Fountain</option>
                <option>Fort Collins</option>
              </Input>
            </FormGroup>
            <FormGroup className="cityZipCommFormGroup zipCommFormGroup">
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
                <option>Colorado Springs</option>
                <option>Manitou Springs</option>
                <option>Fountain</option>
                <option>Fort Collins</option>
              </Input>
            </FormGroup>
            <FormGroup>
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
          </FormGroup>
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
