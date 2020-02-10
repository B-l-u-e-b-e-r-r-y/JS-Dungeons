import React, { Component } from 'react';
import Multiplication from './Multiplication';
import common from '../common';
import './NumberCard.css';

class NumberCard extends Component {
    constructor(props) {
        super(props);

        const numArray = new common().getNumberArray(1, 10);
        this.state = {
            numbers: numArray
        }
    }

    render() {
        return (
            <div className="number-card">
                <h1>{ this.props.number }</h1>
                { this.state.numbers.map((n, index) => {
                    return (
                        <Multiplication
                        number={ this.props.number }
                        index={ n }
                        key={ index }/>
                    );
                }) }
            </div>
        );
    }
}

export default NumberCard;