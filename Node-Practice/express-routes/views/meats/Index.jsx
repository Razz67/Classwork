const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");


class Index extends React.Component {
	render() {
		const { meats } = this.props;
		return (
			<DefaultLayout title="All Meats" foodGroup="meats">
				<h1>Meats Index Page</h1>
				<ul>
					{meats.map((meat) => {
						return (
							<li key={meats._id}>
								The <a href={`/meats/${meat._id}`}></a>
								{meat.name} is made from {meat.type}
							</li>
						);
					})}
				</ul>
				<a href="meats/New">create new Meat</a>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
