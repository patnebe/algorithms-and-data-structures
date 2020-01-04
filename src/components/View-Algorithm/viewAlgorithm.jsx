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
    const { array } = this.state;

    return (
      <div>
        <Router>
          <div className='displayPanelContainer'>
            <Switch>
              <Route
                exact
                path={'/sorting-algorithms'}
                render={() => <SortingVisualizer />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
