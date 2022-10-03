const React = require("react");

class DefaultLayout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/css/styles.css" />
				</head>
				<body>
					<nav>
						<a href={`/${this.props.fruitGroup}`}>{this.props.fruitGroup} </a>
						<a href={`/${this.props.meatGroup}`}>{this.props.meatGroup}  </a>
						<a href={`/${this.props.veggieGroup}`}>{this.props.veggieGroup} </a>
					</nav>
					{this.props.children}
				</body>
			</html>
		);
	}
}

module.exports = DefaultLayout;
