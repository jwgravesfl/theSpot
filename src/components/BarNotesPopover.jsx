import React, { Component } from 'react'
import { Form, Button, Modal, ModalHeader, ModalBody, Label, Input, ModalFooter } from 'reactstrap'

import {db} from '../firebase/firebase'

import styled from 'styled-components'

const BarNotesDiv = styled.div `
  .notePopUp {
    width: 50vw;
  }

  .newNoteandNotesButton {
    font-size: 1em;
    padding: .1em;
    margin-bottom: .1em;
  }

  .newNoteandNotesDiv {
    text-align: right;
  }
`


export default class BarNotesPopover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spotID: '',
      note: '',
      date: '',
      popoverOpen: false,
      modal: false,
      notes: []
    }
    this.toggle = this.toggle.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const newBarNotesRef = db.ref('barNotes')
    const barNote = {
      spotID: this.props.spotID,
      date: this.state.date,
      note: this.state.note,
    }
    newBarNotesRef.push(barNote)
    this.setState({
      date: '',
      note: '',
      modal: false
    })
  }

  componentDidMount() {
    const barNotesRef = db.ref('barNotes')
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

  removeNote(noteID) {
    const barNoteRef = db.ref(`/barNotes/${noteID}`)
    barNoteRef.remove()
  }
  
  render() {
    const spotID = this.props.spotID
    return (
      <BarNotesDiv>
      <div className="newNoteandNotesDiv" >
      <Button className="newNoteandNotesButton" color="danger" onClick={this.toggleModal}>New Note</Button>
        <Modal 
          isOpen={this.state.modal} 
          toggle={this.toggleModal} 
          className=""
          size="lg"
        >
        <Form onSubmit={this.handleSubmit}>
          <ModalHeader toggle={this.toggleModal}>Add Note</ModalHeader>
          <ModalBody>
          
            <div className="row">
              <div className="col">
              <Label 
                  for="date"
                  className="asLabel"
                >Date</Label>
                <Input
                  type="date" 
                  name="date" 
                  placeholder="date"
                  id="date" 
                  onChange={this.handleChange} 
                  value={this.state.date}
                  className="asInput"
                />  
              </div>
              <div className="col">
              <Label 
                  for="note"
                  className="asLabel"
                >Note</Label>
                <Input
                  type="textarea" 
                  name="note" 
                  placeholder="Add Note"
                  id="note" 
                  onChange={this.handleChange} 
                  value={this.state.note}
                  className="asInput"
                />
              </div>
            </div>
            
          </ModalBody>
          <ModalFooter>
          <Button type="submit" color="primary">Add Note</Button>
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
          </Form>
        </Modal>
        <Button className="newNoteandNotesButton" id={"Popover1" + spotID} onClick={this.toggle}>
          Notes
        </Button>
        
        <Modal 
          size='lg'
          isOpen={this.state.popoverOpen} 
          target={"Popover1" + spotID} 
          toggle={this.toggle}
          className="notePopUp"
        >
          <ModalHeader>Notes</ModalHeader>
          {this.state.notes.map((note, i) => {
            return spotID === note.spotID
            ? <div className="row" key={i}>
            <div className="col">
              {note.date}
            </div>
            <div className="col">
              {note.note}
            </div>
            <div className="col">
            <Button onClick={() => this.removeNote(note.id)}>Delete Note</Button>
            </div>
          </div> : null
          })}
          
      </Modal>
      </div>
      </BarNotesDiv>
    )
  }
}
