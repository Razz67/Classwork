const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

// class component
class Show extends React.Component {
	render() {
		const { vegetable } = this.props;
		return (
			<DefaultLayout title={`${vegetable.name} details`} foodGroup="vegetables">

			<div className="show-page">
			
				<h1>Vegetables - Show Page</h1>

				<p>
					The {vegetable.name} is {vegetable.color}.
				</p>

				<button>
					<a href={`/vegetables/${vegetable._id}/edit`}>Edit</a>
				</button>

				<form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
					<input type="submit" value="Delete" />
				</form>

				<a href="/vegetables">Back</a>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = Show;
