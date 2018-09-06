import React, { Component } from 'react'

import { Form, Card, Button, Label, Input, Row, Col, Badge } from 'reactstrap'

import styled from 'styled-components'

import BarNotesPopover from './BarNotesPopover'
import SpotScore from './SpotScore'

import firebase from '../firebase/firebase'

const FilteredSpotsDiv = styled.div `

    ol, ul {
      list-style: none;
    }


    .fsCompanyName {
      color: black;
      font-size: 1.5vw;
      font-variant: small-caps;
      font-family: 'Anton', sans-serif;
    }

    .fsCategory {
      color: red;
      font-size: .9vw;
      font-variant: small-caps;
      font-family: 'Roboto Condensed', sans-serif;
    }

    .fsAddressCityZip {
      font-family: 'Lora', serif;
    }

    .lsPhoneNumber {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .webSocialMediaList {
      margin: 0;
      padding: 0;
      border: 0;

    }

    .spotScoreDisplay {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .notesButton {
      position: absolute;
      bottom: 50px;
      right: 10px;
    }

    .lsDiv {
        padding-top: 3vh;
    }

    .fsCard {
      height: 25vh;
      padding: 0;
      padding-left: 1em;
    }

    .removeSpotButton {
      position: absolute;
      bottom: 10px;
      left: 10px;
      padding: .1em;
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
                  category: spots[spot].category,
                  Facebook: spots[spot].Facebook,
                  GooglePlus: spots[spot].GooglePlus,
                  Twitter: spots[spot].Twitter                
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
          <Row className="row">
              {this.state.spots.map((spot, i) => {
                 return zipSearch == spot.ZIPCode || !zipSearch
                      ? (
                    <Col 
                      xs="12" 
                      sm="12"
                      md="6"
                      lg="4"
                      xl="3"
                      className="lsDiv"
                      key={i}
                    >
                        <Card body className="fsCard">
                        <div className="fsCategory" > {spot.category}</div>    
                        <div className="fsCompanyName" > {spot.CompanyName}</div>
                          
                          <div className="notesButton">
                            <BarNotesPopover spotID={spot.id} />
                          </div>
                        <div className="fsAddressCityZip" >{spot.Address}</div>
                            <div>
                              <div className="fsAddressCityZip" >{spot.City} {spot.ZIPCode}</div> 
                              <h5 className="lsPhoneNumber" >{spot.PhoneNumberCombined}</h5>
                            </div>
                            
                            <div className="card-link" >
                              <ul className="webSocialMediaList" >
                                    {spot.Website ?
                                    <li><Badge color="light" pill href={spot.Website} >Website</Badge></li>
                                    : null
                                  }
                                
                                    {spot.Facebook ?
                                    <li><Badge color="primary" pill href={spot.Facebook}>Facebook</Badge></li>
                                    : null
                                  }
                                
                                    {spot.GooglePlus ?
                                    <li><Badge href={spot.GooglePlus} target="_blank" pill color="primary" >GooglePlus</Badge></li>
                                    : null
                                  }
                                
                                    {spot.Twitter ?
                                    <li><Badge pill href={spot.Twitter} target="_blank" color="primary" >Twitter</Badge></li>
                                    : null
                                  }
                                
                              </ul>
                            </div>
                            <SpotScore spotID={spot.id} />
                            <Button className="removeSpotButton" onClick={() => this.removeSpot(spot.id)}>Remove Spot</Button>
                        </Card>    
                    </Col>
                ) : null
              
              })}
            
          </Row>
        </section>
    </FilteredSpotsDiv>
    )
  }
}
