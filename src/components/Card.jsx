import React, { Component } from 'react'
import Form from './Form';
import Result from './Result';

export default class Card extends Component {
    state = {
        ageYear: '--',
        ageMonth: '--',
        ageDay: '--',
    }

    calculateAge = (dateString) => {

        const today = new Date();
        const birthDate = new Date(dateString);
    
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();
    
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }
    
        if (days < 0) {
            const monthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            days += monthDays;
            months--;
        }
    
        days = isNaN(days) ? "--" : days;
        months = isNaN(months) ? "--" : months;
        years = isNaN(years) ? "--" : years;

        this.setState({
            ageDay: days,
            ageMonth: months,
            ageYear: years,
        });

        return { years, months, days };
    }

    render() {
        const { ageYear, ageMonth, ageDay } = this.state;
        return (
            <div className="card">
                <Form onCalculateAge={this.calculateAge}/>
                <Result day={ageDay} month={ageMonth} year={ageYear} />
            </div>
        );
    }
}
