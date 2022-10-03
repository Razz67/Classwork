const React = require("react");

class Index extends React.Component {
	render() {
		const { vegetables } = this.props;
		return (
			<div>
				<h1>Vegetables Index Page</h1>
				<ul>
					{vegetables.map((vegetables, i) => {
						return (
							<li key={i}>
								The <a href={`/vegetables/${i}`}>{vegetables.name}</a> color is {vegetables.color}.
							</li>
						);
					})}
				</ul>

				{/* Link to the New page */}
				<nav>
					<a href="/vegetables/new">Create New Vegetable</a>
				</nav>
			</div>
		);
	}
}

module.exports = Index;
