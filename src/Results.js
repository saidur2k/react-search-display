import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Results extends Component {
  render () {
    console.log('result', this.props.data)
    return (
      <BootstrapTable data={this.props.data} striped={true} hover={true}>
        <TableHeaderColumn dataField="email" isKey={true} dataAlign="center">Email</TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}