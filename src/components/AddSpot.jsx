import React, { Component } from 'react'

import { Container, Button, Form, Label, Input, FormText } from 'reactstrap'

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
              Address: '',
              City: '',
              ZIPCode: '',
              Neighborhood: '',
              PhoneNumberCombined: '',
              FaxNumberCombined: '',
              Website: '',
              Twitter: '',
              Facebook: '',
              GooglePlus: '',
              category: '',
              subCategory: '',
              theSpotScore: '',
              email: '',
              eventCoordinatorName: '',
              eventCoordinatorEmail: '',
              lastUpdatedOn: '',
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
              CompanyName: this.state.CompanyName,
              Address: this.state.Address,
              City: this.state.City,
              ZIPCode: this.state.ZIPCode,
              Neighborhood: this.state.Neighborhood,
              PhoneNumberCombined: this.state.PhoneNumberCombined,
              Website: this.state.Website,
              Twitter: this.state.Twitter,
              Facebook: this.state.Facebook,
              GooglePlus: this.state.GooglePlus,
              category: this.state.category,
              subCategory: this.state.subCategory,
              email: this.state.email,
            }
            spotsRef.push(spot);
            this.setState({
              CompanyName: '',
              Address: '',
              City: '',
              ZIPCode: '',
              Neighborhood: '',
              PhoneNumberCombined: '',
              FaxNumberCombined: '',
              Website: '',
              Twitter: '',
              Facebook: '',
              GooglePlus: '',
              category: '',
              subCategory: '',
              theSpotScore: '',
              email: '',
              eventCoordinatorName: '',
              eventCoordinatorEmail: '',
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
          >
            Add Spot
          </Label>
            <div>
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
            </div>
            <div className="row">
              <div className="col">
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
              </div>
              <div className="col">
              <Label 
                  for="email"
                  className="asLabel"
                >Email</Label>
                <Input
                  type="email" 
                  name="email" 
                  placeholder="email"
                  id="email" 
                  onChange={this.handleChange} 
                  value={this.state.email}
                  className="asInput"
                />
              </div>
            </div>
              <div className="row">
                <div className="col">
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
                  <option>	Colorado Springs	</option>
                  <option>	Air Force Academy	</option>
                  <option>	Calhan	</option>
                  <option>	Cascade-Chipita Park	</option>
                  <option>	Cimarron Hills	</option>
                  <option>	Elbert	</option>
                  <option>	Fort Carson	</option>
                  <option>	Fountain	</option>
                  <option>	Green Mountain Falls	</option>
                  <option>	Manitou Springs	</option>
                  <option>	Palmer Lake	</option>
                  <option>	Peyton	</option>
                  <option>	Ramah	</option>
                  <option>	Rush	</option>
                  <option>	Woodmoor	</option>
                  <option>	Yoder	</option>
                  
                  </Input>
                </div>
                <div className="col">
                <Label 
                    for="ZIPCode"
                    className="asLabel"
                  >Zip Code</Label>
                  <Input
                    type="select" 
                    name="ZIPCode" 
                    placeholder="ZIPCode"
                    id="ZIPCode" 
                    onChange={this.handleChange} 
                    value={this.state.ZIPCode}
                    className="asSelect"
                  >
                    <option>Zip Code</option>
                    <option>	80106	</option>
                    <option>	80132	</option>
                    <option>	80133	</option>
                    <option>	80808	</option>
                    <option>	80809	</option>
                    <option>	80817	</option>
                    <option>	80819	</option>
                    <option>	80829	</option>
                    <option>	80831	</option>
                    <option>	80832	</option>
                    <option>	80833	</option>
                    <option>	80840	</option>
                    <option>	80864	</option>
                    <option>	80902	</option>
                    <option>	80903	</option>
                    <option>	80904	</option>
                    <option>	80905	</option>
                    <option>	80906	</option>
                    <option>	80907	</option>
                    <option>	80908	</option>
                    <option>	80909	</option>
                    <option>	80910	</option>
                    <option>	80911	</option>
                    <option>	80913	</option>
                    <option>	80914	</option>
                    <option>	80915	</option>
                    <option>	80916	</option>
                    <option>	80917	</option>
                    <option>	80918	</option>
                    <option>	80919	</option>
                    <option>	80920	</option>
                    <option>	80921	</option>
                    <option>	80922	</option>
                    <option>	80923	</option>
                    <option>	80924	</option>
                    <option>	80925	</option>
                    <option>	80926	</option>
                    <option>	80927	</option>
                    <option>	80928	</option>
                    <option>	80929	</option>
                    <option>	80930	</option>
                    <option>	80931	</option>
                    <option>	80938	</option>
                    <option>	80951	</option>
                    
                    
                  </Input>
                </div>
                <div className="col">
                <Label 
                    for="Neighborhood"
                    className="asLabel"
                  >Neighborhood</Label>
                  <Input
                    type="select" 
                    name="Neighborhood" 
                    placeholder="Neighborhood"
                    id="Neighborhood" 
                    onChange={this.handleChange} 
                    value={this.state.Neighborhood}
                    className="asSelect"
                  >
                    <option>Neighborhood</option>
                    <option>Downtown Colorado Springs</option>
                    <option>Manitou Springs</option>
                    <option>Old Colorado City</option>
                    <option>Westside</option>
                  </Input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Label 
                      for="PhoneNumberCombined"
                      className="asLabel"
                    >Phone Number Including Area Code</Label>
                    <Input
                      type="tel" 
                      name="PhoneNumberCombined" 
                      placeholder="PhoneNumberCombined"
                      id="PhoneNumberCombined" 
                      onChange={this.handleChange} 
                      value={this.state.PhoneNumberCombined}
                      className="asInput"
                    />
                </div>
                <div className="col">
                  <Label 
                      for="FaxNumberCombined"
                      className="asLabel"
                    >Fax Number Including Area Code</Label>
                    <Input
                      type="tel" 
                      name="FaxNumberCombined" 
                      placeholder="FaxNumberCombined"
                      id="FaxNumberCombined" 
                      onChange={this.handleChange} 
                      value={this.state.FaxNumberCombined}
                      className="asInput"
                    />
                </div>
              </div>
        
              <div className="row">
                <div className="col">
                  <Label 
                      for="Website"
                      className="asLabel"
                    >Website URL</Label>
                    <Input
                      type="url" 
                      name="Website" 
                      placeholder="Website"
                      id="Website" 
                      onChange={this.handleChange} 
                      value={this.state.Website}
                      className="asInput"
                    />
                </div>
                <div className="col">
                  <Label 
                      for="Facebook"
                      className="asLabel"
                    >Facebook URL</Label>
                    <Input
                      type="url" 
                      name="Facebook" 
                      placeholder="Facebook"
                      id="Facebook" 
                      onChange={this.handleChange} 
                      value={this.state.Facebook}
                      className="asInput"
                    />
                </div>
              </div>
         
              <div className="row">
                <div className="col">
                  <Label 
                      for="Twitter"
                      className="asLabel"
                    >Twitter URL</Label>
                    <Input
                      type="url" 
                      name="Twitter" 
                      placeholder="Twitter"
                      id="Twitter" 
                      onChange={this.handleChange} 
                      value={this.state.Twitter}
                      className="asInput"
                    />
                </div>
                <div className="col">
                  <Label 
                      for="GooglePlus"
                      className="asLabel"
                    >GooglePlus URL</Label>
                    <Input
                      type="url" 
                      name="GooglePlus" 
                      placeholder="GooglePlus"
                      id="GooglePlus" 
                      onChange={this.handleChange} 
                      value={this.state.GooglePlus}
                      className="asInput"
                    />
                </div>
              </div>

              <div className="row">
              <div className="col">
                <Label 
                    for="eventCoordinatorName"
                    className="asLabel"
                  >Event Coordinator Name</Label>
                  <Input
                    type="url" 
                    name="eventCoordinatorName" 
                    placeholder="Event Coordinator Name"
                    id="eventCoordinatorName" 
                    onChange={this.handleChange} 
                    value={this.state.eventCoordinatorName}
                    className="asInput"
                  />
              </div>
              <div className="col">
                <Label 
                    for="eventCoordinatorEmail"
                    className="asLabel"
                  >Event Coordinator Email</Label>
                  <Input
                    type="url" 
                    name="eventCoordinatorEmail" 
                    placeholder="Event Coordinator Email"
                    id="eventCoordinatorEmail" 
                    onChange={this.handleChange} 
                    value={this.state.eventCoordinatorEmail}
                    className="asInput"
                  />
              </div>
            </div>

            <div className="row">
              <div className="col">
              <Label 
                    for="category"
                    className="asLabel"
                  >Category</Label>
                  <Input
                    type="select" 
                    name="category" 
                    placeholder="Category"
                    id="category" 
                    onChange={this.handleChange} 
                    value={this.state.category}
                    className="asSelect"
                  >
                    <option>Category</option>
                    <option>Live Music</option>
                    <option>Clubs</option>
                    <option>Neighborhood</option>
                    <option>Fancy</option>
                    <option>European</option>
                    <option>421</option>
                  </Input>
                </div>
              <div className="col">
              <Label>
                Sub Categories
              </Label>
              <FormText >
              Country	College	Dive Piano Comedy	Irish
              Tejano	NightClub	Lounge	Cigar Food	English
              HipHop	Motorcycle Sportsbar	Wine	Sottish
              RocknRoll	Chain German				
              </FormText>
                
              </div>
            </div>
            <div className="row">
              <div className="col">

              <Label 
                    for="subCategory"
                    className="asLabel"
                  >SubCategories</Label>
                  <Input
                    type="textarea" 
                    name="subCategory" 
                    placeholder="Add all Sub Categories that apply"
                    id="subCategory" 
                    onChange={this.handleChange} 
                    value={this.state.subCategory}
                    className="asInput"
                  />
              </div>
              </div>

            
              

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
