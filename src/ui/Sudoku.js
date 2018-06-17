import React, { Component } from 'react'
import styled from 'styled-components'

export default class Sudoku extends Component {
  constructor() {
    super()
    this.state = {
      grid: [],
    }

    this.fillGrid = this.fillGrid.bind(this)
  }

  componentWillMount() {
    this.fillGrid()
  }

  fillGrid() {
    const { grid } = this.state
    for (let i = 0; i < 9; i++) {
      grid.push(Array(9))
    }
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        grid[row][column] = this.getRandomNumber()
      }
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * (9)) + 1
  }

  render() {
    return <div>
      <Header>Sudoku</Header>
      {this.state.grid.map((row) => {
        return (
          <div>
            {row.map((cell) => {
              return (
                <Cell>{cell}</Cell>
              )
            })}
        </div>
      )
      })}
    </div>
  }
}

const Header = styled.h1`
  font-size: 3.5rem;
  font-family: 'Merriweather', serif;
  letter-spacing: 3px;
`

const Cell = styled.div`
  padding: 10px 15px;
  width: fit-content;
  display: inline-block;
  border: 1px solid rgba(0,0,0,0.1);
  background-color: white;
`
