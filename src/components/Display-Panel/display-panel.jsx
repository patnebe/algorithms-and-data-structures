import React, { Component } from 'react';
import './display-panel.css';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			algorithmName: 'MergeSort'
		};
	}

	render() {
		return (
			<div className="displayPanelContainer">
				<div className="algorithmName">{this.state.algorithmName}</div>
				<div className="innerPanel">

				</div>
				<button className="runAlgorithm">Run</button>
			</div>
		);
	}
}
