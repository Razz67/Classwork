const React = require("react");

// Class Component
class Show extends React.Component {
	render() {
		// Object destructuring
		const { name, color, readyToEat } = this.props.fruits;

		return (
			<div>
				<h1>Show Page</h1>
				<p>
					The {name} is {color}.
				</p>
				<p>{readyToEat ? "It's Ready to eat" : "It is not ready to eat"}</p>
			</div>
		);
	}
}

module.exports = Show;
