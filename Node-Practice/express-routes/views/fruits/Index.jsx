const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout")

class Index extends React.Component {
	render() {
		// Object Destructuring
		const { fruits } = this.props;
		return (
			<DefaultLayout title="All Fruit" foodGroup="fruits">
					<h1 id="fruitsH1">Fruit Index</h1>
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
					<a href="fruits/new">create new fruit</a>
			</DefaultLayout>
		)
	}
};

module.exports = Index;
