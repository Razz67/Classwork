const React = require("react");

class Index extends React.Component {
	render() {
		// Object Destructuring
		const { meats } = this.props;
		return (
			<div>
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
			</div>
		);
	}
}

module.exports = Index;
