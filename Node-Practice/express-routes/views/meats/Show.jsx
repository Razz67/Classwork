const React = require("react");

// Class Component
class Show extends React.Component {
	render() {
		// Object destructuring
		const { name, type } = this.props.meats;

		return (
			<div>
				<h1>Show Meats Page</h1>
				<p>
					The {name} is {type}.
				</p>
			</div>
		);
	}
}

module.exports = Show;
