import React from 'react';
import './Multiplication.css';

const Multiplication = (props) => {
    const total = props.number * props.index;
    return (
        <div className="multiplication">
            <span>{ props.number } × { props.index } ＝ { total }</span>
        </div>
    );
}

export default Multiplication;