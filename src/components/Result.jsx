import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        const { day, month, year } = this.props;
        return (
            <div className="result-section">

                <p id="result-year"><span>{year}</span> years</p>
                <p id="result-month"><span>{month}</span> months</p>
                <p id="result-day"><span>{day}</span> days</p>
                
            </div>
        );
    }
}
