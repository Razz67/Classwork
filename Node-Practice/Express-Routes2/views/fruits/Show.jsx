const React = require('react');
// const DefaultLayout = require('..layouts/DefaultLayout');

// class component extended from the base component (react)
class Show extends React.Component {
    // Use react render() method to render the component
    render() {
        // Object destructuring
        const {name, color, readyToEat} = this.props.fruit;
        return (
            <div>
                <h1>Fruits Show Page</h1>
                <p>
                The {name} is {color} 
                </p>
                <p>and is {readyToEat ? 'ready to eat' : 'not ready to eat'} 
                </p>
                <nav>
                <a href='/fruits'>Back</a>
                </nav>
            </div>
        )
    }
};
module.exports = Show;