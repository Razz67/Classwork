const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Show extends React.Component {
	render() {
		const { fruit } = this.props;
		return (
			<DefaultLayout title={`${fruit.name} details`}>
				<div className="show-page">
					<h1> Fruits - Show Route (View) </h1>
					<p>
						The {fruit.name} is {fruit.color}.
					</p>
					<p>
						{fruit.readyToEat
							? "It is ready to eat!"
							: "It is NOT ready to eat..."}
					</p>
					{fruit.name === "banana" && (
						<img src="/images/banana.png" alt="banana" />
					)}

					<button>
						<a href={`/fruits/${fruit._id}/edit`}>Edit</a>
					</button>

					<form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
						<input type="submit" value="Delete" />
					</form>
					<a href="/fruits">Back</a>
				</div>
			</DefaultLayout>
		);
	}
}
module.exports = Show;
