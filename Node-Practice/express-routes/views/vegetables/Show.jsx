const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

// class component
class Show extends React.Component {
	render() {
		const { veggie } = this.props;
		return (
			<DefaultLayout title={`${veggie.name} details`} foodGroup="vegetables">

			<div className="show-page">
			
				<h1>Vegetables - Show Page</h1>

				<p>
					The {veggie.name} is {veggie.color}.
				</p>

				<button>
					<a href={`/vegetables/${veggie._id}/edit`}>Edit</a>
				</button>

				<form action={`/meats/${veggie._id}?_method=DELETE`} method="POST">
					<input type="submit" value="Delete" />
				</form>

				<a href="/vegetables">Back</a>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = Show;
