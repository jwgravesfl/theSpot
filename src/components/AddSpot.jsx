import React, { Component } from 'react'

import { Container } from 'reactstrap'


import firebase from '../firebase/firebase'

export default class AddSpot1 extends Component {
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
      <Container>
        <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              name="CompanyName" 
              placeholder="CompanyName" 
              onChange={this.handleChange} 
              value={this.state.CompanyName}
            />
            <button>Add Spot</button>
        </form>
       </Container>
    )
  }
}
