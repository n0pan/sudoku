import React, { Component } from 'react'
import Sudoku from './ui/Sudoku'

export default class App extends Component {
  render() {
    return <div style={{ textAlign: 'center' }}>
      <h1>Sudoku</h1>
      <Sudoku />
    </div>
  }
}
