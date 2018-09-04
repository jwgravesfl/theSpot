import React, { Component } from 'react'

import { Container } from 'reactstrap'

import styled from 'styled-components'

import firebase from '../firebase/firebase'

const ListSpotsDiv = styled.div `
    .listSpots {

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
          <div className="wrapper">
              {this.state.spots.map((spot) => {
                return (
                    <div key={spot.id}>
                        {spot.id} {spot.CompanyName} {spot.Address}
                        <button onClick={() => this.removeSpot(spot.id)}>Remove Spot</button>
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
