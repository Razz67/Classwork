const React = require("react");

class Index extends React.Component {
	render() {
		const { meats } = this.props;
		return (
			<div>
				<h1>Meats Index Page</h1>
				<ul>
					{meats.map((meats, i) => {
						return (
							<li key={i}>
								The <a href={`/meats/${i}`}>{meats.name}</a> type is {meats.type}{" "}
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
