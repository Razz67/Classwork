const React = require("react");
// const DefaultLayout = require("../layouts/DefaultLayout");

class Edit extends React.Component {
	render() {
		const { meat } = this.props;

		return (
			<DefaultLayout title="Edit A Meat">
				<h1>Edit Route (View)</h1>

				<form action={`/meats/${meat._id}?_method=PUT`} method="POST">

					<label htmlFor="name">Name:</label>
					<input type="text" name="name" id="name" defaultValue={meat.name} />
					<br /><br />

					<label htmlFor="type">Type:</label>
					<input type="text" 	name="type"	id="type"
						defaultValue={meat.type}
					/>
					<br /><br />
					<input type="submit" />
				</form>
			</DefaultLayout>
		);
	}
}

module.exports = Edit;
