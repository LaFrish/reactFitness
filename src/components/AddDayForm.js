import { PropTypes, Component } from 'react'

const goldWorkouts = [
	"Spinning",
	"BodyPump",
	"Running"
]

class Autocomplete extends Component {

	get value() {
		return this.refs.inputWorkout.value
	}

	set value(inputValue) {
		this.refs.inputWorkout.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputWorkout"
					   type="text"
					   list="gold-workouts" />
				<datalist id="gold-workouts">
					{this.props.options.map(
						(opt, i) =>
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}



export const AddDayForm = ({ workout,
							 date,
							 cardio,
							 strength,
							 onNewDay }) => {

	let _workout, _date, _cardio, _strength

	const submit = (e) => {
		e.preventDefault()
		onNewDay({
			workout: _workout.value,
			date: _date.value,
			cardio: _cardio.checked,
			strength: _strength.checked
		})
		_workout.value = ''
		_date.value = ''
		_cardio.checked = false
		_strength.checked = false

	}

	return (
		<form onSubmit={submit} className="add-day-form">

			<label htmlFor="workout">Workout Name</label>
			<Autocomplete options={goldWorkouts}
				   		  ref={input => _workout = input}/>

			<label htmlFor="date">Date</label>
			<input id="date"
				   type="date"
				   required
				   defaultValue={date}
				   ref={input => _date = input}/>

			<div className="row">
				<input id="cardio"
					   type="checkbox"
					   defaultChecked={cardio}
					   ref="cardio"
					   ref={input => _cardio = input}/>
				<label htmlFor="cardio">Cardio Day</label>

				<input id="strength"
					   type="checkbox"
					   defaultChecked={strength}
					   ref="strength"
					   ref={input => _strength = input}/>
				<label htmlFor="strength">
					Strength Training Day
				</label>
			</div>
			<button>Add Day</button>
		</form>
	)
}

AddDayForm.defaultProps = {
	workout: "BodyPump",
	date: "01-01-2018",
	cardio: false,
	strength: true
}


AddDayForm.propTypes = {
	workout: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	cardio: PropTypes.bool.isRequired,
	strength: PropTypes.bool.isRequired
}
