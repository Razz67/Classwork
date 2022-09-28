const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

// class component
class Show extends React.Component {
	render() {
		const { meat } = this.props;

		return (
			<DefaultLayout title={`${meat.name} details`} foodGroup="meats">
				<h1>Show Page</h1>
				<p>
					The {meat.name} is {meat.type}.
				</p>
				<nav>
					<a href="/meats">Back</a>
				</nav>

				<button>
					<a href={`/meats/${meat._id}/edit`}>Edit</a>
				</button>

				<form action={`/meats/${meat._id}?_method=DELETE`} method="POST">
					<input type="submit" value="Delete" />
				</form>
				<a href="/meats">Back</a>
			</DefaultLayout>
		);
	}
}

module.exports = Show;
