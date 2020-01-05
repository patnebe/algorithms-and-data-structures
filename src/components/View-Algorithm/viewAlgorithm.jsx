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
          <button className="backButton"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.76562 7.8125L1.95312 5L4.76562 2.1875" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.34375 5H8.04688" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg><span>&nbsp; Back</span></button>
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
                <div className="details">Add this.....</div>
              </div>
              <div className="complexity">
                <div className="title">Complexity</div>
                <div className="details">O(nlogn) time</div>
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
