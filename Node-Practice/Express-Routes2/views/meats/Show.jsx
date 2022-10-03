const React = require("react");
class Show extends React.Component {
	render() {
		const {name, type} = this.props.meat;
		return (
			<div>
				<h1>Meats Show Page</h1>
				<p>
					The {name} type is {type}
				</p>

				<nav>
					<a href="/meats">Back</a>
				</nav>
			</div>
		);
	}
}
module.exports = Show;
