import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from './ui/Grid'

export default class App extends Component {
  render() {
    return <SudokuContainer>
      <Grid />
    </SudokuContainer>
  }
}

const SudokuContainer = styled.div`
  text-align: center;
  margin-top: 10%;
`