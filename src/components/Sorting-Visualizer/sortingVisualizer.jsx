/* eslint-disable indent */
import React, { Component } from 'react';
import mergeSort from '../../Algorithms/mergeSort';
import './sortingVisualizer.css';

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      arrayIsSorted: false,
      currentlySorting: false
    };

    this.currentlySorting = false;
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 40; i++) {
      array.push(randomIntFromInterval(15, 200));
    }
    this.setState({ array });
    const arrayValueBars = document.querySelectorAll('.arrayValueBar');
    arrayValueBars.forEach((eachBar) => {
      eachBar.style.backgroundColor = 'gray';
    });
  }

  mergeSortVisualizer() {
    const animations = mergeSort(this.state.array);
    // const newAnimations = [];
    // for (const animation of animations) {
    //   newAnimations.push(animation.comparison);
    //   newAnimations.push(animation.comparison);
    //   newAnimations.push(animation.swap);
    // }
    this.currentlySorting = true;
    for (let i = 0; i < animations.length; i++) {
      const arrayValueBars = document.querySelectorAll('.arrayValueBar');
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayValueBars[barOneIndex].style;
        const barTwoStyle = arrayValueBars[barTwoIndex].style;
        const color = i % 3 === 0 ? 'pink' : 'turquoise';
        this.id = setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 25);
      } else {

        this.id = setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayValueBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 25);
      }

      // if (i === animations.length - 1) {
      //   setTimeout(() => {
      //     arrayValueBars.forEach((eachBar) => {
      //       eachBar.style.backgroundColor = 'green';
      //       this.setState({ currentlySorting: false, arrayIsSorted: true });
      //     });
      //   }, i * 50);
      // }
    }
  }

  // sortingStatus() {
  //   if (this.currentlySorting) {
  //     return 'Currently sorting';
  //   } else if (this.state.arrayIsSorted) {
  //     return 'Sorted';
  //   } else {
  //     return 'Not sorted';
  //   }
  // }

  render() {
    const { array } = this.state;

    return (
      <div className='mainContainer'>
        <div className='visualizationDisplay'>
          <div className='sortingStatus'></div>
          <div className='arrayContainer'>
            {array.map((value, index) => <div className='arrayValueBar' key={index} style={{ height: `${value}px` }}></div>)}
          </div>
          <div className='buttonContainer'>
            <button className='resetArrayButton' onClick={() => this.resetArray()}>Reset array</button>
            <button className='visualizeSortButton' onClick={() => this.mergeSortVisualizer()}>Visualize merge sort</button>
          </div>
        </div>
      </div>
    );
  }
}

// From stack overflow
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) * 1.5);
