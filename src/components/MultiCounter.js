import React, { Component } from 'react';
import CounterGroup from './CounterGroup.js'
import CounterSizeGenerator from './CounterSizeGenerator.js'
import CounterGroupSum from './CounterGroupSum.js'

class MultiCounter extends Component {

    constructor(props) {
        super(props);
        
        this.state = { size: 0, sum: 0};
    }
    
    onGenerate = (size) => {
        this.setState({ size });
    }

    onSum = (value) => {
        this.setState(() => ({sum: value}))
    }

    render() {
        return (
            <div>
                <CounterSizeGenerator onGenerate={this.onGenerate}/>
                <CounterGroupSum toShow={this.state.sum}/>
                <CounterGroup size={this.state.size} onSum={this.onSum}/>
            </div>
        );
    }
}

export default MultiCounter;