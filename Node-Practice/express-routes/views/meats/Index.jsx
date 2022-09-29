const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		// Destructuing Meats
		const { meats } = this.props;
		return (
			<DefaultLayout title="All Meats" foodGroup="meats">
				<h1>Meats Index Page</h1>
				<ul>
					{meats.map((meats) => {
						return (
							<li key={meats._id}>
								The <a href={`/meats/${meats._id}`}>{meats.name}</a> is made
								from {meats.type}
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
