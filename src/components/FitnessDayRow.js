import Calendar from 'react-icons/lib/fa/calendar'
import Heart from 'react-icons/lib/fa/heartbeat'
import Weight from 'react-icons/lib/md/fitness-center'
import { PropTypes } from 'react'

export const FitnessDayRow = ({workout, date,
							cardio, strength}) => (
	<tr>
		<td>
			{date}
		</td>
		<td>
			{workout}
		</td>
		<td>
			{(cardio) ? <Weight /> : null}
		</td>
		<td>
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
