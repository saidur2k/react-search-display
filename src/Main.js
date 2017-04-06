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

function getUsers() {
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
      searchQuery: '',
      searchResult: [{email: '', name: ''}]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({searchQuery: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const users = getUsers();
    console.log('handleSubmit', users)
    this.setState({ searchResult: users})
  }

  render () {
    return (
      <div>
        <Search
          searchQuery={this.state.searchQuery}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Async
         pendingRender={
           <div className="empty empty-small">
             <div className="loading" />
             <p className="empty-title">Searching</p>
           </div>
         }
         promise={getUsers(this.state.searchQuery)}
         then={(val) => <Results data={val} />}
        />
      </div>
    )
  }
}