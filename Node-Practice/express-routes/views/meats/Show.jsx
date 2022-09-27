const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

// class component
class Show extends React.Component {
	render() {
		const { name, color,  } = this.props.meat;

		return (
			<DefaultLayout title={`${name} details`} foodGroup="meats">
				<h1>Show Page</h1>
				<p>
					The {name} is {type}.
				</p>
				<nav>
					<a href="/meats">Back</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = Show;
