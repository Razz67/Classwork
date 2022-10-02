const React = require("react");
class Show extends React.Component {
	render() {
		const meat = this.props.meats;
		return (
			<div>
				<h1>
					<h1>Show Page</h1>
					{/* can't use a if=else or for loops in jsx so we use a ternary operator */}
					The {meat.name} is {meat.type} 
				</h1>
			</div>
		);
	}
}
module.exports = Show;
