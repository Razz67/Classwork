const React = require("react");

class Index extends React.Component {
	render() {
		const {fruits} = this.props;
		return (
			<div>
				<h1>Fruits Index Page</h1>
				<ul>
					{fruits.map((fruit, i) => {
						return (
							<li key={fruit.i}>
								The{" "}
                                <a href={`/fruits/${i}`}>
                                {fruit.name}</a>{" "} is {fruit.color} <br></br> and is{" "}
                                {fruit.readyToEat ? "ready to eat" : "not ready to eat"}
                                <br />
							</li>
						);
					})}
				</ul>

                {/* Link to the New page */}
                <nav>
                    <a href="/fruits/new">Create New Fruit</a>
                </nav>
			</div>
		);
	}
}

module.exports = Index;
