const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

// class component
class Show extends React.Component {
	render() {
		const { name, color, readyToEat } = this.props.fruit;

		return (
			<DefaultLayout title={`${name} details`} foodGroup="fruits">
				<h1>Show Page</h1>
				<p>
					The {name} is {color}.
				</p>
				<p>
					{readyToEat ? "It is ready to eat!" : "It is NOT readt to eat... :("}
				</p>
				<nav>
					<a href="/fruits">Back</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = Show;
