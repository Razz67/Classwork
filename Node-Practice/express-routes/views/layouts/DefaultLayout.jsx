const React = require("react")

class DefaultLayout extends React.Component {
    render() {
        return(
            
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                    <nav>
                        <a href={`/${this.props.foodGroup}`}>{this.props.foodGroup}</a>
                        <a href={`/meats}`}>{this.props.meats}</a>
                        <a href={`veggies/${this.props.veggieGroup}`}>{this.props.veggieGroup}</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }

}
module.exports = DefaultLayout;