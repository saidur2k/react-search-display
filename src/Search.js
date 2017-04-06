import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
export default class Search extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Enter name</ControlLabel>
          <FormControl
            type="text"
            value={this.props.searchquery}
            placeholder="John Doe"
            onChange={this.props.handleChange}
          />
          <FormControl.Feedback />
          <Button bsStyle="primary">Search</Button>
        </FormGroup>
      </form>
    )
  }
}