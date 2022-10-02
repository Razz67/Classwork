const React = require("react");

class New extends React.Component {
	render() {
		return (
			<div>
				<h1>New Meat Page</h1>

				<form action="/fruits" method="POST">
                
					<label htmlFor="name">Name: </label>

					<input type="text" name="name" />
					<br />

					<label htmlFor="type">Type: </label>

					<input type="text" name="type" />
					
					<input type="submit" name="" value="Create Fruit" />
				</form>
			</div>
		);
	}
}

module.exports = New;
