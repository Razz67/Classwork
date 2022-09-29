const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

// class component
class Show extends React.Component {
	render() {
		const { meat } = this.props;
		return (
			<DefaultLayout title={`${meat.name} details`}foodGroup="meats">
				<div className="show-page">
					<h1>Meats - Show Page</h1>
				<p>
					The {meat.name} is {meat.type}.
				</p>
				

				<button>
					<a href={`/meats/${meat._id}/edit`}>Edit</a>
				</button>

				<form action={`/meats/${meat._id}?_method=DELETE`} method="POST">
					<input type="submit" value="Delete" />
				</form>
				<a href="/meats">Back</a>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = Show;
