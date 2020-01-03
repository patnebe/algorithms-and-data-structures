import React, { Component } from 'react';
import mergeSort from '../../Algorithms/mergeSort';
import './display-panel.css';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			algorithmName: 'MergeSort',
			initialArray: [3, 7, -23, 0, 100, -56, 4, 5],
			sortedArray: [3, 7, -23, 0, 100, -56, 4, 5]
		};
	}

	displayArray() {
		const array = this.state.sortedArray;
		console.log(array);
		const solution = array.map((i) => <div className='arrayValue' key={i}>{i}</div>);
		console.log(solution);
		return solution;
	}

	callMergeSort() {
		const array = this.state.initialArray.slice();
		mergeSort(array, 0, array.length-1);
		this.setState({sortedArray: array});
	}

	resetArray() {
		const defaultArray = this.state.initialArray;
		this.setState({sortedArray: defaultArray});
		this.displayArray();
	}

	render() {
		return (
			<div className="displayPanelContainer">
				<div className="algorithmName">{this.state.algorithmName}</div>
				<div className="innerPanel">
					<div className="arrayContainer">
						{this.displayArray()}
					</div>
				</div>
				<div className="buttonContainer">
					<button className="runAlgorithm" onClick={(e) => this.callMergeSort()}>Run</button>
					<button className="resetArray" onClick={(e) => this.resetArray()}>Reset Array</button>
				</div>
			</div>
		);
	}
}
