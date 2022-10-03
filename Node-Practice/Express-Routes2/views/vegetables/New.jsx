const React = require("react");

class New extends React.Component {
	render() {
		return (
			<div>
				<h1>New Vegetable Page</h1>
				{/* Action is the route that the form will submit to */}
				<form action="/vegetables" method="POST">
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" />
					<br />
					<br />

					<label htmlFor="color">Color: </label>
					<input type="text" name="color" />
					<br />
					<br />

					<input type="submit" value="Create Veggie" />
				</form>
			</div>
		);
	}
}

module.exports = New;
