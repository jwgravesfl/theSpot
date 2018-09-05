import React, { Component } from 'react'

import { Form, Container, Card, Button, CardTitle, CardSubtitle, CardText, Label, Input } from 'reactstrap'

import styled from 'styled-components'

import firebase from '../firebase/firebase'

const ListSpotsDiv = styled.div `
    .listSpots {

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
    <ListSpotsDiv>
      <Container>
        <section>
          <Form>
            <Label 
                for="zipSearch"
                className="asLabel"
              >Zip Code</Label>
              <Input
                type="number" 
                name="zipSearch" 
                placeholder="Zip Code Search"
                id="zipSearch" 
                onChange={this.handleChange} 
                value={this.state.zipSearch}
                className="asInput"
              />
          </Form>  
        </section>
        <section className='display-item'>
          <div className="row">
              {this.state.spots.map((spot, i) => {
                 return zipSearch == spot.ZIPCode || !zipSearch
                      ? (
                    <div className="col-4 lsDiv" key={i}>
                        <Card body>
                            <CardTitle>{spot.CompanyName}</CardTitle>
                            <CardSubtitle>{spot.Address} {spot.City} {spot.ZIPCode} </CardSubtitle>
                            <CardText>{spot.PhoneNumberCombined}</CardText>
                            <CardText>{spot.Website} {spot.Facebook}</CardText>
                            <Button onClick={() => this.removeSpot(spot.id)}>Remove Spot</Button>
                        </Card>    
                    </div>
                ) : null
              
              })}
            
          </div>
        </section>
      </Container>
    </ListSpotsDiv>
    )
  }
}
