const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class New extends React.Component {
	render() {
		return (
			<DefaultLayout title="Create new meat" foodGroup="meats">
				<h1>Create New Meat</h1>
				<form action="/meats" method="POST">
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
