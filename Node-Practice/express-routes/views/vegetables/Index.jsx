const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { vegetables } = this.props;
		return (
			<DefaultLayout title="All Veggies" foodGroup="vegetables">
				<h1>Vegetable Index</h1>
				<ul>
					{vegetables.map((vegetable) => {
						return (
							<li key={vegetable._id}>
								The <a href={`/vegetables/${vegetable._id}`}>
								{vegetable.name}</a> is {" "} {vegetable.color}
							</li>
						);
					})}
				</ul>
				<nav>
					<a href="/vegetables/new">create new Veggie</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
