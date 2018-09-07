import React, { Component } from 'react';
import styled from 'styled-components'
import AddSpot from './components/AddSpot'
import FilteredSpots from './components/FilterSpots'

import img from './assets/theSpotLogoPNG.png'

const AppWrapper = styled.div `
    margin: 1em;

    .tSLogo {
      img {
        width: 3em;
      }
      
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
          <header className="tSLogo">
            <img className="" src={img} alt="theSpot Logo" />
          </header>
          <AddSpot />
          <FilteredSpots />
          
          
        </AppWrapper>
    );
  }
}

export default App;
