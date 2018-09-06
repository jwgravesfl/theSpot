import React, { Component } from 'react'
import { Form, Button, Popover, PopoverHeader, Modal, ModalHeader, ModalBody, Label, Input, ModalFooter } from 'reactstrap'

import firebase from '../firebase/firebase'


export default class BarNotesPopover extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
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
    const newBarNotesRef = firebase.database().ref('barNotes')
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
      <Button color="danger" onClick={this.toggleModal}>New Note</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="">
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
