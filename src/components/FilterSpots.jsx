import React, { Component } from 'react'

import { Form, Container, Card, Button, CardText, Label, Input } from 'reactstrap'

import styled from 'styled-components'

import BarNotesPopover from './BarNotesPopover'

import firebase from '../firebase/firebase'

const FilteredSpotsDiv = styled.div `
    .notesButton {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .lsDiv {
        padding-top: 3vh;
    }

    .wrapper {

    }
`

export default class FilteredSpots extends Component {
    constructor() {
        super();
            this.state = {
              spots: [],
              zipSearch: ''
                }
                
            this.handleChange = this.handleChange.bind(this)
            }

          componentDidMount() {
            const spotsRef = firebase.database().ref('spots');
            spotsRef.on('value', (snapshot) => {
              let spots = snapshot.val();
              let newState = [];
              for (let spot in spots) {
                newState.push({
                  id: spot,
                  CompanyName: spots[spot].CompanyName,
                  Address: spots[spot].Address,
                  City: spots[spot].City,
                  ZIPCode: spots[spot].ZIPCode,
                  Neighborhood: spots[spot].Neighborhood,
                  PhoneNumberCombined: spots[spot].PhoneNumberCombined,
                  FaxNumberCombined: spots[spot].FaxNumberCombined,
                  Website: spots[spot].Website,
                  email: spots[spot].email,                
                });
              }
              this.setState({
                spots: newState
              });
            });
          }

          removeSpot(spotID) {
            const spotRef = firebase.database().ref(`/spots/${spotID}`);
            spotRef.remove();
          }

          handleChange(e) {
            this.setState({
              [e.target.name]: e.target.value
            });
          }

          
  render() {
      const zipSearch = this.state.zipSearch
    
    return (
    <FilteredSpotsDiv>
      <Container>
        <section>
          <Form>

          <Label 
                    for="zipSearch"
                    className="asLabel"
                  >Zip Code</Label>
                  <Input
                    name="zipSearch" 
                    placeholder="Zip Code Search"
                    id="zipSearch" 
                    onChange={this.handleChange} 
                    value={this.state.zipSearch}
                    className="asInput"
                    type="select" 
                  >
                    <option>Zip Code</option>
                    <option>80106</option>
                    <option>80132</option>
                    <option>80133</option>
                    <option>80808</option>
                    <option>80809</option>
                    <option>80817</option>
                    <option>80819</option>
                    <option>80829</option>
                    <option>80831</option>
                    <option>80832</option>
                    <option>80833</option>
                    <option>80840</option>
                    <option>80864</option>
                    <option>80902</option>
                    <option>80903</option>
                    <option>80904</option>
                    <option>80905</option>
                    <option>80906</option>
                    <option>80907</option>
                    <option>80908</option>
                    <option>80909</option>
                    <option>80910</option>
                    <option>80911</option>
                    <option>80913</option>
                    <option>80914</option>
                    <option>80915</option>
                    <option>80916</option>
                    <option>80917</option>
                    <option>80918</option>
                    <option>80919</option>
                    <option>80920</option>
                    <option>80921</option>
                    <option>80922</option>
                    <option>80923</option>
                    <option>80924</option>
                    <option>80925</option>
                    <option>80926</option>
                    <option>80927</option>
                    <option>80928</option>
                    <option>80929</option>
                    <option>80930</option>
                    <option>80931</option>
                    <option>80938</option>
                    <option>80951</option>
                    
                  </Input>
           
          </Form>  
        </section>
        <section className='display-item'>
          <div className="row">
              {this.state.spots.map((spot, i) => {
                 return zipSearch == spot.ZIPCode || !zipSearch
                      ? (
                    <div className="col-4 lsDiv" key={i}>
                        <Card body>
                        <div className="row">
                             {spot.CompanyName}
                          
                          <div className="notesButton">
                            <BarNotesPopover spotID={spot.id} />
                          </div>
                        </div>
                        <div className="row">{spot.Address}</div>
                            <div className="row">
                              <div className="col">{spot.City}</div> 
                              <div className="col">{spot.ZIPCode }</div> 
                              <div className="col">{spot.PhoneNumberCombined}</div>
                            </div>
                            
                            <CardText>{spot.Website} {spot.Facebook}</CardText>
                            <Button onClick={() => this.removeSpot(spot.id)}>Remove Spot</Button>
                        </Card>    
                    </div>
                ) : null
              
              })}
            
          </div>
        </section>
      </Container>
    </FilteredSpotsDiv>
    )
  }
}
