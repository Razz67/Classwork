const React = require("react");

class Index extends React.Component {
	render() {

		// Object destructuring
		const { fruits } = this.props;
		return (
			<div>
				<h1>Fruits Index Page</h1>
				<ul>
					{fruits.map((fruits, i) => {
						return (
							<li key={i}>
								The{" "}
                                <a href={`/fruits/${i}`}>
                                {fruits.name}</a> is {fruits.color} <br></br> and is{" "}
                                {fruits.readyToEat ? "ready to eat" : "not ready to eat"}
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
