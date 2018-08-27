import Calendar from 'react-icons/lib/fa/calendar'
import Weight from 'react-icons/lib/md/fitness-center'
import Heart from 'react-icons/lib/fa/heartbeat'
import { FitnessDayRow } from './FitnessDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const FitnessDayList = ({days, filter}) => {
  const filteredDays = (!filter ||
  		!filter.match(/cardio|strength/))?
  		days:
  		days.filter(day => day[filter])

  return (
  	<div className="fitness-day-list">
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Workout</th>
				<th>Cardio</th>
				<th>Strength Training</th>
			</tr>
			<tr>
				<td colSpan={4}>
					<Link to="/list-days">
						All Days
					</Link>
					<Link to="/list-days/cardio">
						Cardio Days
					</Link>
					<Link to="/list-days/strength">
						Strength Training Days
					</Link>
				</td>
			</tr>
		</thead>
		<tbody>
			{filteredDays.map((day, i) =>
				<FitnessDayRow key={i}
						   {...day}/>
				)}
		</tbody>

	</table>
	</div>
)
}

FitnessDayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"FitnessDayList should be an array"
				)
		} else if(!props.days.length) {
			return new Error(
				"FitnessDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}
