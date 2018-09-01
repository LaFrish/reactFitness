import { Component } from 'react'
import { FitnessDayList } from './FitnessDayList'
import { FitnessDayCount } from './FitnessDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allFitnessDays: [
				{
					workout: "Running",
					date: "01/01/2018",
					cardio: true,
					strength: false
				},
				{
					workout: "Weight Lifting",
					date: "01/02/2018",
					cardio: false,
					strength: true
				}
			]
		}
		this.addDay = this.addDay.bind(this)
	}

	addDay(newDay) {
		this.setState({
			allFitnessDays: [
				...this.state.allFitnessDays,
				newDay
			]
		})
	}

	countDays(filter) {
		const { allFitnessDays } = this.state
		return allFitnessDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}

	render() {
		return (
			<div className="app">
			<Menu />
			{(this.props.location.pathname === "/") ?
			  <FitnessDayCount total={this.countDays()}
							 cardio={this.countDays(
							 		"cardio"
							 	)}
							 strength={this.countDays(
							 		"strength"
							 	)}/> :
			 (this.props.location.pathname === "/add-day") ?
			 	<AddDayForm onNewDay={this.addDay}/> :
			 	<FitnessDayList days={this.state.allFitnessDays}
			 				filter={this.props.params.filter}/>
			}

			</div>
		)
	}
}
