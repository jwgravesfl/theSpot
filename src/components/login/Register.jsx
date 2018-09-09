import React, { Component } from 'react'
import { auth } from '../../firebase/auth'
import { db } from '../../firebase/firebase'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      registerError: null,
      username: '',
      email: '',
      users: []
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
    .catch(e => this.setState(setErrorMsg(e)))
    }

  componentDidUpdate() {
    const usersRef = db.ref('users')
    const user = {
      email: this.state.email,
      username: this.state.username
    }
    usersRef.push(user)
    this.setState({
      email: '',
      username: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label>Username</label>
            <input 
              className="form-control"
              ref={(username) => this.username = username}
              placeholder="Username"
              name="username" 
              id="username" 
              onChange={this.handleChange} 
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              className="form-control"
              ref={(email) => this.email = email}
              placeholder="Email"
              name="email" 
              id="email" 
              onChange={this.handleChange} 
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password"
              className="form-control"
              placeholder="Password"
              ref={(pw) => this.pw = pw}
            />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
}