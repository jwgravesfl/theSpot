import React, { Component } from 'react'

import styled from 'styled-components'

import firebase from '../firebase/firebase'

const SpotScoreDiv = styled.div `

`

export default class SpotScore extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         spotScores: []
      }
    }
    
    componentDidMount() {
        const spotScoresRef = firebase.database().ref('spotScores')
        spotScoresRef.on('value', (snapshot) => {
            let spotScores = snapshot.val()
            let newState = []
            for (let spotScore in spotScores) {
                newState.push({
                    id: spotScore,
                    spotID: spotScores[spotScore].spotID,
                    cleanliness: spotScores[spotScore].cleanliness,
                    buildingUpkeep: spotScores[spotScore].buildingUpkeep,
                    parking: spotScores[spotScore].parking,
                    ambience: spotScores[spotScore].ambience,
                    welcoming: spotScores[spotScore].welcoming,
                    realness: spotScores[spotScore].realness,
                    priceSpecials: spotScores[spotScore].priceSpecials,
                    drinkFoodQuality: spotScores[spotScore].drinkFoodQuality,
                    customerService: spotScores[spotScore].customerService,
                    communitySupport: spotScores[spotScore].communitySupport,
                    extraCredit: spotScores[spotScore].extraCredit,
                })
            }
            this.setState({
                spotScores: newState
            })
        })
    }

  render() {
  //    const spotID = this.state.spotID
  //    const cleanliness = this.state.cleanliness
  //    const buildingUpkeep = this.state.buildingUpkeep
  //    const parking = this.state.parking
  //    const ambience = this.state.ambience
  //    const welcomingrealness = this.state.welcomingrealness
  //    const realness = this.state.realness
  //    const priceSpecials = this.state.priceSpecials
  //    const drinkFoodQuality = this.state.drinkFoodQuality
  //    const customerService = this.state.customerService
  //    const communitySupport = this.state.communitySupport
  //    const extraCredit = this.state.extraCredit
  const spotID = this.props.spotID
    return (
      <SpotScoreDiv>
        {this.state.spotScores.map((spotScore, i) => {
            return spotID === spotScore.spotID
            ? <div className="spotScoreDisplay">
                {spotScore.cleanliness + spotScore.buildingUpkeep + spotScore.parking + spotScore.ambience + 
                    spotScore.welcoming + spotScore.realness + spotScore.priceSpecials + spotScore.drinkFoodQuality + spotScore.customerService + 
                    spotScore.communitySupport + spotScore.extraCredit }
            </div>
            : null
        })}       
      </SpotScoreDiv>
    )
  }
}
