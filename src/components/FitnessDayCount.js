import Calendar from 'react-icons/lib/fa/calendar'
import Weight from 'react-icons/lib/md/fitness-center'
import Heart from 'react-icons/lib/fa/heartbeat'
import { PropTypes } from 'react'


export const FitnessDayCount = ({total=70, cardio=20, strength=10}) => (

		<div className="fitness-day-count">
			<h1>Fitness Tracker</h1>
			<div className="total-days">

				<span>{total}</span>
					<Calendar />
				<span>days</span>
			</div>
			<div className="cardio-days">
				<span>{cardio}</span>
					<Heart />
				<span>days</span>
			</div>
			<div className="strength-days">
				<span>{strength}</span>
					<Weight />
				<span>days</span>
			</div>

		</div>
)

FitnessDayCount.propTypes = {
  total: PropTypes.number,
  cardio: PropTypes.number,
  strength: PropTypes.number
}
