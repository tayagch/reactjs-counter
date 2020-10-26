import React, { Component } from "react";
import Counter from "./Counter";

class CounterGroup extends Component {
    constructor(props) {
        super(props);

        this.initArray = this.initArray.bind(this);
        this.state ={
            total:0
        }
    }

    initArray(size) {
        const number = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    }

    onChangeHandler = (number) => {
        this.setState((prevState) => ({total: prevState.total + number}), () => this.props.onSum(this.state.total));
    }

    render() {
        const size = this.props.size;
        const counterSizeArray = this.initArray(size);

        return (
            <div>
                {
                    counterSizeArray.map((value) => (
                        <Counter key={value} onChangeHandler={this.onChangeHandler} />
                    ))
                }
            </div>
        );
    }
}

export default CounterGroup;