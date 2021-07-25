import React, { Component } from 'react'
import GridOfBoxes from './components/GridOfBoxes';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app-container" >
        <GridOfBoxes />
      </div>
    )
  }
}


