const React = require("react");

// Class Component
class Show extends React.Component {
	render() {
		// Object destructuring
		const { name, color } = this.props.vegetables;

		return (
			<div>
				<h1>Show Vegetable Page</h1>
				<p>
					The {name} is {color}.
				</p>
			</div>
		);
	}
}

module.exports = Show;
