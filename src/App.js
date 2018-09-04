import React, { Component } from 'react';
import styled from 'styled-components'
import AddSpot from './components/AddSpot'
import ListSpots from './components/ListSpots'

const AppWrapper = styled.div `
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
      <AppWrapper className="">
          <header className="">
            theSpot
          </header>
          <AddSpot />
          <ListSpots />
        </AppWrapper>
    );
  }
}

export default App;
