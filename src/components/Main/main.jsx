import React, {Component} from 'react';
import DisplayPanel from '../Display-Panel/display-panel';
import './main.css';

export default class Main extends Component {
	render() {
		return (
			<div className="main">
				<DisplayPanel />
			</div>
		);
	}
}
