import React, { Component } from 'react';

export default class Search extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          value={this.props.searchQueryChange}
          onChange={this.props.handleChange}
        />
        <button>Search</button>
      </form>
    )
  }
}