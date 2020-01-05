/* eslint-disable indent */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ViewAlgorithm from './components/View-Algorithm/viewAlgorithm';

// import SortingVisualizer from './components/Sorting-Visualizer/sortingVisualizer';


function App() {
  return (
    <div className="App">
      <ViewAlgorithm algorithmName="Merge Sort" />
    </div>
  );
}

export default App;
