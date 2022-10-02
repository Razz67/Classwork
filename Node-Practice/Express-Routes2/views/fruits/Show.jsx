const React = require('react');
class Show extends React.Component {
    render() {
        const fruit = this.props.fruits;
        return (
            <div>
            <h1>
                <h1>Show Page</h1>
                {/* can't use a if=else or for loops in jsx so we use a ternary operator */}
                The {fruit.name} is {fruit.color} and is {fruit.readyToEat ? 'ready to eat' : 'not ready to eat'}
            </h1>
            </div>
        )
    }
};
module.exports = Show;