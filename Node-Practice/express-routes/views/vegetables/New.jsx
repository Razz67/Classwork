const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class New extends React.Component {
	render() {
		return (
			<DefaultLayout title="Create new vegetable" foodGroup="vegetables">
				<h1>Create New Vegetable</h1>
				<form action="/vegetables" method="POST">
					<label htmlFor="name">Name: </label>
					<input type="text" name="name" />
					<br />

					<label htmlFor="type">Color: </label>
					<input type="text" name="color" />
					<br />
					
					<input type="submit" name="" value="Create Veggie" />
				</form>
			</DefaultLayout>
		);
	}
}

module.exports = New;
