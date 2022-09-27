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

					<label htmlFor="type">Type: </label>
					<input type="text" name="type" />
					<br />
					
					<input type="submit" name="" value="Create Meat" />
				</form>
			</DefaultLayout>
		);
	}
}

module.exports = New;
