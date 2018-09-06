import React, { Component } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

import firebase from '../firebase/firebase'


export default class BarNotesPopover extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      popoverOpen: false,
      notes: []
    }
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }

  componentDidMount() {
    const barNotesRef = firebase.database().ref('barNotes')
    barNotesRef.on('value', (snapshot) => {
      let notes = snapshot.val()
      let newState = []
      for (let note in notes) {
        newState.push({
          id: note,
          spotID: notes[note].spotID,
          note: notes[note].note,
          date: notes[note].date
        })
      }
      this.setState({
        notes: newState
      })
    })
  }

  removeNote(spotID) {
    const barNoteRef = firebase.database().ref(`/notes/${spotID}`)
    barNoteRef.remove()
  }
  
  render() {
    const spotID = this.props.spotID
    return (
      <div>
        <Button id={"Popover1" + spotID} onClick={this.toggle}>
          Notes
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={"Popover1" + spotID} toggle={this.toggle}>
          <PopoverHeader>Notes</PopoverHeader>
          {this.state.notes.map((note, i) => {
            return spotID === note.spotID
            ? <div className="row" key={i}>
            <div className="col">
              {note.date}
            </div>
            <div className="col">
              {note.note}
            </div>
          </div> : null
          })}
          
      </Popover>
      </div>
    )
  }
}
