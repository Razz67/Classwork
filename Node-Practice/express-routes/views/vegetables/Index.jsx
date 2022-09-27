const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		// Object Destructuring
		const { vegetable } = this.props;
		return (
			<DefaultLayout>
				<h1>Vegetable Index</h1>
				<ul>
					{vegetable.map((vegetable) => {
						return (
							<li key={meats._id}>
								The <a href={`/vegetable/${vegetable_id}`}></a>
								{vegetable.name} is {vegetable.color}
							</li>
						);
					})}
				</ul>
				<nav>
					<a href="vegetable/new">create new Veggie</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
