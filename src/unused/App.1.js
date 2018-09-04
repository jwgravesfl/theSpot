import React, { Component } from 'react';
import BarData from '../src/data/barDataUploaded08.31.2018.json'
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import styled from 'styled-components'

const BarListWrapper = styled.div `
    margin: 1em;

    .barListRow {
    }

    .barListColumn {
      padding: 1em;
      text-align: center;
    }
`

class App extends Component {
  render() {
    return (
      <BarListWrapper className="">
        <header className="">
          theSpot
        </header>
        <p className="">
          Bar List
          <Row className="show-grid barListRow">
          
          {BarData.map((barDetail, index) => {
            return (
            <Col xs="12" sm="6" md="4" lg="3" xl="2"
                className="barListColumn"
                >
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                  <CardTitle>{barDetail.CompanyName}</CardTitle>
                  <CardText>{barDetail.PhoneNumberCombined}</CardText>
                  <CardText>{barDetail.ZIPCode}</CardText>
                  <Button><a href="{barDetail.Facebook}">Facebook</a></Button>
                </Card>
            </Col>  )         
          })}
          
          </Row>
        </p>
      </BarListWrapper>
    );
  }
}

export default App;
