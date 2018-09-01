import Calendar from 'react-icons/lib/fa/calendar'
import Heart from 'react-icons/lib/fa/heartbeat'
import Weight from 'react-icons/lib/md/fitness-center'
import { PropTypes } from 'react'

export const FitnessDayRow = ({workout, date,
							cardio, strength}) => (
	<tr className="fitRow">
		<td className="text">
			{date}
		</td>
		<td className="text">
			{workout}
		</td>
		<td className="icon">
			{(cardio) ? <Weight /> : null}
		</td>
		<td className="icon">
			{(strength) ? <Heart /> : null}
		</td>
	</tr>

)

FitnessDayRow.propTypes = {
	workout: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	cardio: PropTypes.bool,
	strength: PropTypes.bool
}
