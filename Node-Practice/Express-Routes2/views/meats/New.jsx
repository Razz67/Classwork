const React = require("react");

class New extends React.Component {
	render() {
		return (
			<div>
				<h1>New Meat Page</h1>

				<form action="/meats" method="POST">
                
					<label htmlFor="name">Name: </label>
					<input type="text" name="name" />
					<br /><br />

					<label htmlFor="type">Type: </label>
					<input type="text" name="type" />
					<br /><br />
					
					<input type="submit" name="" value="Create Meat" />
				</form>
			</div>
		);
	}
}

module.exports = New;
