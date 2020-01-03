import React, { Component } from 'react';
import mergeSort from '../../Algorithms/mergeSort';
import './sortingVisualizer.css';

export default class SortingVisualizer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			array: []
		};
	}

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 25; i++) {
      array.push(randomIntFromInterval(10, 100))
    }
    this.setState({array});
    console.log(array);
  }

  mergeSort() {

  }

	render() {
    const {array} = this.state;

		return (
      <div>
        <div className='buttonContainer'>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
        </div>

        <div className='arrayContainer'>
          {array.map((value, index) => <div className='arrayValueBar' key={index} style={{height: `${value}px`}}></div>)}
        </div>
      </div>
    );
	}
}

// From stack overflow
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1)*2);
