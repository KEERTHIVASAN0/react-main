import React from 'react';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Keerthivasan'
        };
    }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <ChildComponent name={this.state.name} />
            </div>
        );
    }
}

class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Child Component</h1>
                <p>Hello, my name is {this.props.name}.</p>
            </div>
        );
    }
}

export default ParentComponent;