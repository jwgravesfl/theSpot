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
                  companyName: spots[spot].CompanyName,
                });
              }
              this.setState({
                spots: newState
              });
            });
          }


  render() {
    return (
    <ListSpotsDiv>
      <Container>
        <section className='display-item'>
          <div className="wrapper">
              {this.state.spots.map((spot) => {
                return (
                    <h3>{spot.companyName}</h3>
                )
              })}
            
          </div>
        </section>
      </Container>
    </ListSpotsDiv>
    )
  }
}
