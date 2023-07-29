import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        return (
            <div className="result-section">

                <p id="result-year"><span>--</span> years</p>
                <p id="result-month"><span>--</span> months</p>
                <p id="result-day"><span>--</span> days</p>
                
            </div>
        );
    }
}
