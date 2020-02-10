import React from 'react';
import './Title.css';

const Title = (props) => {
    return (
        <div className="title">
            <div className="lines"></div>
            <div className="text">
                <h1>九九乘法表</h1>
                <h2>MULTIPLICATION CHART</h2>
            </div>
            <div className="lines"></div>
        </div>
    );
}

export default Title;