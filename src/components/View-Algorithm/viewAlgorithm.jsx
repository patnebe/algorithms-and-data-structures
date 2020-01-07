/* eslint-disable indent */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './viewAlgorithm.css';
import SortingVisualizer from '../Sorting-Visualizer/sortingVisualizer';

export default class ViewAlgorithm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }

  componentDidMount() {
    // this.resetArray();
  }



  render() {
    // const { array } = this.state;

    return (
      <div>
        <nav className="algoDetailsNavbar">
          <button className="backButton" disabled><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.76562 7.8125L1.95312 5L4.76562 2.1875" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.34375 5H8.04688" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg><span>&nbsp; Back (other algorithms coming soon)</span></button>
        </nav>
        <div className="algorithmDetails">

          <main>
            <div className="algorithmName">{this.props.algorithmName}</div>
            <section className="visualizationPanel">
              <SortingVisualizer />
            </section>
            <section className="algorithmInfo">
              <div className="conceptualOverview">
                <div className="title">Conceptual overview</div>
                <div className="details">This algorithm takes in an array of numbers which are placed in any order and returns an array of those same numbers sorted in a non-decreasing order. This is done by recursively splitting the array (and consequently, each sub-array) into two parts, arranging the elements of each array in an increasing order while merging both sub-arrays into one array, and then finally returning the resulting array. <span className='extraInfo'><p>The 'merge' step is the crucial part of the algorithm that does most of the 'sorting' work in order to produce the array containing the result. While both sub-arrays are not empty, it keeps updating the result array with items from each sub array until all items in both arrays have been placed in the result array.</p> <p>How does it know which of the items from the sub array to place in the resulting array? The algorithm simply compares the items located at the leftmost index of each sub-array, selects the smaller one, and places it into the result array, and this process continues till the content of both sub arrays have been filled into the result array and the function returns to a higher level in the recursive tree until it gets to the top level of the recursive calls at which point the array is completely sorted. This works because each sub array is always sorted before it is merged. </p></span><p>The merge sort algorithm can be visualized by clicking the button above. Notice how each smaller subset of the whole array is divided into two parts and merged in a way that the items are arranged in an increasing order from left to right.</p></div>
              </div>
              <div className="complexity">
                <div className="title">Complexity</div>
                <div className="details">O(nlogn) time and O(nlogn) space</div>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

{/* <Switch>
              <Route
                exact
                path={'/sorting-algorithms'}
                render={() => <SortingVisualizer />}
              />
            </Switch> */}
