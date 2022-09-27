const React = require("react");

class Index extends React.Component {
	render() {
		// Object Destructuring
		const { fruits } = this.props;
		return (
			<div>
				<h1>Fruit Index</h1>
				<ul>
					{fruits.map((fruits, i) => {
						return (
							<li key={i}>
								The <a href={`/fruits/${i}`}></a>
								{fruits.name} is {fruits.color}
							</li>
						);
					})}
				</ul>
				<a href="fruits/New">create new fruit</a>
			</div>
		);
	}
}

module.exports = Index;
