const React = require("react");

class Index extends React.Component {
	render() {
		const { vegetables } = this.props;
		return (
			<div>
				<h1>Fruits Index Page</h1>
				<ul>
					{vegetables.map((vegetable, i) => {
						return (
							<li key={vegetable.i}>
								The <a href={`/vegetables/${i}`}>{vegetable.name}</a> color is {vegetable.color}.
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
