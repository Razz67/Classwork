const React = require("react");
class Show extends React.Component {
	render() {
		const vegetable = this.props;
		return (
			<div>
				<h1>
					<h1>Show Page</h1>
					{/* can't use a if=else or for loops in jsx so we use a ternary operator */}
					The {vegetable.name} color is {vegetable.color}
				</h1>
			</div>
		);
	}
}
module.exports = Show;
