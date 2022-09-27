const React = require("react");

class New extends React.Component {
	render() {
		return (
			<div>
				<h1>Create New Fruit</h1>
				<form action="/fruits" method="POST">

					<label htmlFor="name">Name: </label>
					<input type="text" name="name" />
					<br />

					<label htmlFor="color">Color: </label>
					<input type="text" name="color" />
					<br />

					<label htmlFor="readyToEat">Ready to Eat: </label>
					<input type="checkbox" name="readyToEat" />
					<br />
                    <input type="submit" name="" value="Create Fruit" />
				</form>
			</div>
		);
	}
}

module.exports = New;
