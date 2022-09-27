const React = require("react");

class New extends React.Component {
	render() {
		return (
			<div>
				<h1>Create New Meat</h1>
				<form action="/meats" method="POST">
					<label htmlFor="name">Name: </label>
					<input type="text" name="name" />
					<br />

					<label htmlFor="color">Type: </label>
					<input type="text" name="color" />
					<br />

					
					<input type="submit" name="meat" value="Create Meat" />
				</form>
			</div>
		);
	}
}

module.exports = New;
