const React = require("react");

class Index extends React.Component {
	render() {
		// Object Destructuring
		const { meats } = this.props;
		return (
			<div>
				<h1>Meats Index Page</h1>
				<ul>
					{meats.map((meats, i) => {
						return (
							<li key={i}>
								The <a href={`/meats/${i}`}></a>
								{meats.name} is {meats.color}
							</li>
						);
					})}
				</ul>
				<a href="meats/new">create new fruit</a>
			</div>
		);
	}
}

module.exports = Index;
