const React = require("react");
// const DefaultLayout = require("../layouts/DefaultLayout");

class Edit extends React.Component {
	render() {
		let { vegetable } = this.props;

		return (
			<DefaultLayout title="Edit A Meat">
				<h1>Edit Route (View)</h1>
				<form action={`/vegetables/${vegetable._id}?_method=PUT`} method="POST">
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" id="name" defaultValue={vegetable.name} />

					<label htmlFor="color">color:</label>
					<input type="text" name="color" id="color" defaultValue={vegetable.type} />
					<input type="submit" />
				</form>
			</DefaultLayout>
		);
	}
}

module.exports = Edit;
