import React, { Component } from 'react';


class CounterGroupSum extends Component {

    render() {
        return (
            <div>
                <span>Sum: {this.props.toShow}</span>
            </div>
        );
    }
}

export default CounterGroupSum;