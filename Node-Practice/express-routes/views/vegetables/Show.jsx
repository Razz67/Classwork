const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

// class component
class Show extends React.Component {
	render() {
		const { veggie } = this.props;

		return (
			<DefaultLayout title={`${veggie.name} details`} foodGroup="vegetables">
				<h1>Show Page</h1>
				<p>
					The {veggie.name} is {veggie.color}.
				</p>
				<nav>
					<a href="/vegetables">Back</a>
				</nav>

				<button>
					<a href={`/vegetables/${veggie._id}/edit`}>Edit</a>
				</button>

				<form action={`/meats/${veggie._id}?_method=DELETE`} method="POST">
					<input type="submit" value="Delete" />
				</form>
				<a href="/vegetables">Back</a>
			</DefaultLayout>
		);
	}
}

module.exports = Show;
