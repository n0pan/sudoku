import React, { Component } from 'react'
import styled from 'styled-components'

const MAX_LENGTH = 9
export default class Grid extends Component {
  constructor() {
    super()
    this.state = {
      grid: [],
    }
    this.initializeGrid = this.initializeGrid.bind(this)
    this.shuffleGrid = this.shuffleGrid.bind(this)
  }

  componentWillMount() {
    const { grid } = this.state
    this.initializeGrid()
    this.shuffleGrid(grid)
  }

  initializeGrid() {
    const { grid } = this.state
    for (let i = 0; i < MAX_LENGTH; i++) {
      grid.push([1,2,3,4,5,6,7,8,9])
    }
  }

  shuffleGrid(grid) {
    // Using Fisher-Yates shuffle algorithm
    let shuffledGrid = grid
    let gridLength = shuffledGrid.length-1
    for (let row = gridLength; row >= 0; row--) {
      for (let column = gridLength; column >= 0; column--) {
        let cell = Math.floor(Math.random() * column)
        let temp = shuffledGrid[row][cell]
        shuffledGrid[row][cell] = shuffledGrid[row][column]
        shuffledGrid[row][column] = temp
      }
    }
    this.setState({
      grid: shuffledGrid,
    })
  }

  render() {
    return <div>
      <Header>Sudoku</Header>
      {this.state.grid.map((row, index) => {
        return (
          <div key={`row-${index}`}>
            {row.map((cell, index) => {
              return (
                <Cell className="sudoku-cell"
                      type="number"
                      key={`column-${index}`}
                      value={cell}
                      disabled={cell} />
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

const Cell = styled.input`
  &.sudoku-cell {
    width: 27px;
    height: 40px;
    text-align: center;
    display: inline-block;
    border: 1px solid rgba(0,0,0,0.1);
    background-color: white;
    font-family: 'Cousine', serif;
    font-size: 1rem;
    padding-left: 13px;
  }
`
