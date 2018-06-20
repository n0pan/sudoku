import React, { Component } from 'react'
import styled from 'styled-components'
import Sudoku from './ui/Sudoku'

export default class App extends Component {
  render() {
    return <SudokuContainer>
      <Sudoku />
    </SudokuContainer>
  }
}

const SudokuContainer = styled.div`
  text-align: center;
  margin-top: 10%;
`