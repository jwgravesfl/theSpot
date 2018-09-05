import React, { Component } from 'react'

import { Container, Card, Button, CardTitle, CardSubtitle, CardText } from 'reactstrap'

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


export default class AddSpot1 extends Component {
    constructor() {
        super();
            this.state = {
              spots: []
                }
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

  render() {
    return (
    <ListSpotsDiv>
      <Container>
        <section className='display-item'>
          <div className="row">
              {this.state.spots.map((spot) => {
                return (
                    <div className="col-4 lsDiv" key={spot.id}>
                        <Card body>
                            <CardTitle>{spot.CompanyName}</CardTitle>
                            <CardSubtitle>{spot.Address} {spot.City} {spot.ZIPCode} </CardSubtitle>
                            <CardText>{spot.PhoneNumberCombined}</CardText>
                            <CardText>{spot.Website} {spot.Facebook}</CardText>
                            <Button onClick={() => this.removeSpot(spot.id)}>Remove Spot</Button>
                        </Card>    
                    </div>
                )
              })}
            
          </div>
        </section>
      </Container>
    </ListSpotsDiv>
    )
  }
}
