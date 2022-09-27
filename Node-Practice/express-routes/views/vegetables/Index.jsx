const React = require("react");

class Index extends React.Component {
	render() {
		// Object Destructuring
		const { vegetables } = this.props;
		return (
			<div>
				<h1>Vegetable Index</h1>
				<ul>
					{fruits.map((vegetables, i) => {
						return (
							<li key={i}>
								The <a href={`/vegetable/${i}`}></a>
								{vegetables.name} is {vegetables.color}
							</li>
						);
					})}
				</ul>
				<a href="vegetables/new">create new Veggie</a>
			</div>
		);
	}
}

module.exports = Index;
