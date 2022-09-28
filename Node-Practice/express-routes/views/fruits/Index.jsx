const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { fruits } = this.props;
		return (
			<DefaultLayout title="All Fruits" foodGroup="fruits">
				<h1>Fruits Index Page</h1>
				<ul>
					{fruits.map((fruit) => {
						return (
							<li key={fruits._id}>
								The <a href={`/fruits/${fruit._id}`}>
								{fruit.name}</a> is  {fruit.color}
							</li>
						);
					})}
				</ul>
				<a href="fruits/New">create new Fruit</a>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
