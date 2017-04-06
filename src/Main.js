import React, { Component } from 'react';
import Search from './Search'
import Results from './Results'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchQuery: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({searchQuery: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('handleSubmit')
  }

  render () {
    return (
      <div>
        <Search
          searchQuery={this.state.searchQuery}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results />
      </div>
    )
  }
}