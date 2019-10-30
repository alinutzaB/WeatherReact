import React, {Component} from 'react';
import './App.css';
import WeekContainer from './WeekContainer';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';


class App extends Component {
	render() {
		return(
			<div className="App">
				<WeekContainer />
			</div>		
		);
	}
}


export default App;