const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		// Destructuring Vegetables
		const { vegetables } = this.props;
		return (
			<DefaultLayout title="All Veggies" veggieGroup="vegetables">
				<h1>Vegetable Index Page</h1>
				<ul>
					{vegetables.map((vegetable) => {
						return (
							<li key={vegetable._id}>
								The{" "}
								<a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is{" "}
								{vegetable.color}
							</li>
						);
					})}
				</ul>
				<nav>
					<a href="/vegetables/New">create new Veggie</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
