import React, { Component } from 'react'

import { Container } from 'reactstrap'


import firebase from '../firebase/firebase'

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
      <Container>
        <section className='display-item'>
          <div className="wrapper">
            <ul>
              {this.state.spots.map((spot) => {
                return (
                    <h3>{spot.companyName}</h3>
                )
              })}
            </ul>
          </div>
        </section>
      </Container>
    )
  }
}
