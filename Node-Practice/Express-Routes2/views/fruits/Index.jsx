const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {

		// Object destructuring
		const { fruits } = this.props;
		return (
			<DefaultLayout class="container" title="All Fruits" meatGroup="meats" veggieGroup="vegetables">
				<div>
					<h1>Fruits Index Page</h1>
					<ul>
						{fruits.map((fruits, i) => {
							return (
								<li key={i}>
									The <a href={`/fruits/${i}`}>{fruits.name}</a> is{" "} {fruits.color}. 
								</li>
							);
						})}
					</ul>

					{/* Link to the New page */}
					<nav>
						<a href="/fruits/new">Create New Fruit</a>
					</nav>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
