import React, { Component } from 'react';
import styled from 'styled-components'
import AddSpot from './components/protected/AddSpot'
import FilteredSpots from './components/FilterSpots'
import NavBar from './components/NavBar'



const AppWrapper = styled.div `
    margin: 1em;

      img {
        width: 2em;
      }
      
    }

    .barListColumn {
      padding: 1em;
      text-align: center;
    }

  #theSpotNavBar {
    
    .theSpotLogo {
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translate(-50%, 0);
  }    
  

`

class App extends Component {
    
  render() {
    return (
      <AppWrapper className="">
          <header className="">
            <NavBar />
          </header>
          <AddSpot />
          <FilteredSpots />
          
          
        </AppWrapper>
    );
  }
}

export default App;
