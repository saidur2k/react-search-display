import React, { Component } from 'react';
import Search from './Search'
import Results from './Results'
import Async from 'react-promise'

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

function getUsers(input) {
  console.log('getUsers input', input)
  var url = 'https://jsonplaceholder.typicode.com/users'
  return fetch(url)
    .then(status)
    .then(json)
    .catch(e => console.log(e));
}

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchQueryChange: '',
      searchQuerySubmit: '',
      searchResult: [{email: '', name: ''}]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.searchQueryChange === nextState.searchQuerySubmit) {
      return true
    }
    return false
  }

  handleChange(event) {
    this.setState({searchQueryChange: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({searchQuerySubmit: this.state.searchQueryChange})
  }

  render () {
    return (
      <div>
        <Search
          searchQuery={this.state.searchQueryChange}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Async
          promise={getUsers(this.state.searchQueryChange)}
          then={(val) => <Results data={val} />}
        />
      </div>
    )
  }
}