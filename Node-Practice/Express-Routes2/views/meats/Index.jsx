const React = require("react");

class Index extends React.Component {
	render() {
		const { meats } = this.props;
		return (
			<div>
				<h1>Meats Index Page</h1>
				<ul>
					{meats.map((meat, i) => {
						return (
							<li key={meat.i}>
								The <a href={`/meats/${i}`}>{meat.name}</a> type is {meat.type}{" "}
								
							</li>
						);
					})}
				</ul>

				{/* Link to the New page */}
				<nav>
					<a href="/meats/new">Create New Meat</a>
				</nav>
			</div>
		);
	}
}

module.exports = Index;
