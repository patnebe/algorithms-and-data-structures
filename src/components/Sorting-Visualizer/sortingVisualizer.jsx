/* eslint-disable indent */
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
    for (let i = 0; i < 70; i++) {
      array.push(randomIntFromInterval(10, 200));
    }
    this.setState({ array });
    console.log(array);
  }

  mergeSortVisualizer() {
    const animations = mergeSort(this.state.array);
    const newAnimations = [];
    for (const animation of animations) {
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.swap);
    }

    for (let i = 0; i < newAnimations.length; i++) {
      const arrayValueBars = document.querySelectorAll('.arrayValueBar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = newAnimations[i];
        const barOneStyle = arrayValueBars[barOneIndex].style;
        const barTwoStyle = arrayValueBars[barTwoIndex].style;
        const color = i % 3 === 0 ? 'red' : 'turquoise';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 5);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = newAnimations[i];
          const barOneStyle = arrayValueBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 5);
      }
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <div className='buttonContainer'>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSortVisualizer()}>Merge Sort</button>
        </div>

        <div className='arrayContainer'>
          {array.map((value, index) => <div className='arrayValueBar' key={index} style={{ height: `${value}px` }}></div>)}
        </div>
      </div>
    );
  }
}

// From stack overflow
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) * 2);
