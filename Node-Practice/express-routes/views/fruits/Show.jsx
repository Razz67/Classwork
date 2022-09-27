const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");


// Class Component
class Show extends React.Component {
	render() {
		// Object destructuring
		const { name, color, readyToEat } = this.props.fruits;

		return (
			<DefaultLayout title={`${name} details`} foodGroup={"fruits"}>
				<h1>Show Page</h1>
				<p>
					The {name} is {color}.
				</p>
				<p>{readyToEat ? "It's Ready to eat" : "It is not ready to eat"}</p>
				<nav>
					<a href="/fruits">Back</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = Show;
