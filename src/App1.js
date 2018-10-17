import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/login/Register'

import { firebaseAuth } from './firebase/firebase'

import styled from 'styled-components'
import AddSpot from './components/protected/AddSpot'
import FilteredSpots from './components/FilterSpots'
import NavBar from './components/NavBar'
import Home from './components/Home'



const AppWrapper = styled.div `
    margin: 1em;

    #mainViewer {
      padding-top: 6vh;
    }

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
  
  .loginRegisterLogoutNavItem {
    position: fixed;
    top: 10px;
    right: 10px;
  }

  .navBarButtons {
    border: none; 
   
  }
`

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/filteredspots' />}
    />
  )
}

class App extends Component {
  state = {
    authed: false,
    loading: true,
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {

    return this.state.loading === true ? <h1>Loading</h1> : (
      <HashRouter>
        <AppWrapper>
        <NavBar authed={this.state.authed} />
            <div id="mainViewer" className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/addspot' component={AddSpot} />
                <PrivateRoute authed={this.state.authed} path='/filteredspots' component={FilteredSpots} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
            
        </AppWrapper>
      </HashRouter>

    );
  }
}

export default App;
