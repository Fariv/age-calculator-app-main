import React, { Component } from 'react'
import Input from './Input';
import iconArrow from '../assets/images/icon-arrow.svg';

export default class Form extends Component {
    state = {
        day: '',
        month: '',
        year: '',
        dayErrorClassName: '',
        monthErrorClassName: '',
        yearErrorClassName: '',
        dayErrorMessage: '',
        monthErrorMessage: '',
        yearErrorMessage: '',
    }

    handleChange = (e) => {
        const fieldname = e.target.getAttribute('name');
        const value = e.target.value;
        this.setState({
            [fieldname]: value,
        }, () => {

            const dateObj = new Date();
            let todayDay = dateObj.getDate();
            let todayMonth = dateObj.getMonth()+1;
            let todayYear = dateObj.getFullYear();
            let dayErrorClassName = '';
            let monthErrorClassName = '';
            let yearErrorClassName = '';
            let dayErrorMessage = '';
            let monthErrorMessage = '';
            let yearErrorMessage = '';
    
            const { day, month, year } = this.state;
            const typedDate = year + "-" + month + "-" + day;
            const todayDate = todayYear + "-" + todayMonth + "-" + todayDay;
            if (fieldname === "year") {
    
                if (value > dateObj.getFullYear()) {
                    
                    yearErrorClassName = 'error-input';
                    yearErrorMessage = 'Must be in the past';
                }
                
            } else if (fieldname === "month") {
    
                if (value < 1 || value > 12) {
    
                    monthErrorClassName = 'error-input';
                    monthErrorMessage = 'Must be a valid month';
                } else if (value > dateObj.getMonth()+1) {
    
                    monthErrorClassName = 'error-input';
                    monthErrorMessage = 'Must be in the past';
                }
    
    
            } else if (fieldname === "day") {
    
                if (
                    (this.leapYear(value) && month == 2 && value > 28) ||
                    ([1,3,5,7,8,10,12].indexOf(month) >= 0 && value > 31) ||
                    value > 30 || value < 1
                ) {
                    dayErrorClassName = 'error-input';
                    dayErrorMessage = 'Must be a valid day';
                } else if (new Date(typedDate) >= new Date(todayDate)) {
    
                    dayErrorClassName = 'error-input';
                    dayErrorMessage = 'Must be in the past';
                }
    
            }

            if (new Date(typedDate) >= new Date(todayDate)) {
    
                yearErrorClassName = 'error-input';
                yearErrorMessage = 'Must be in the past';
            }

            this.setState({
                dayErrorClassName,
                monthErrorClassName,
                yearErrorClassName,
                dayErrorMessage,
                monthErrorMessage,
                yearErrorMessage,
            }, () => {

                const { dayErrorClassName, monthErrorClassName, yearErrorClassName } = this.state;
                if (
                    dayErrorClassName.length === 0 && 
                    monthErrorClassName.length === 0 && 
                    yearErrorClassName.length === 0
                ) {
                    const { onCalculateAge } = this.props;
                    onCalculateAge(typedDate);
                }
            });
        });
    }

    leapYear = (year) => {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    handleError = () => {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    render() {
        const { day, month, year, dayErrorClassName, monthErrorClassName, yearErrorClassName, dayErrorMessage, monthErrorMessage, yearErrorMessage } = this.state;
        return (
            <form className="inputs-section">
                    
                <div className="form-inputs-group">

                    <Input label="Day" placeholder="DD" classtAtr="day" idAttr="day" value={day} onHandleChange={this.handleChange} message={dayErrorMessage} errorClassName={dayErrorClassName} />
                    <Input label="Month" placeholder="MM" classtAtr="month" idAttr="month" value={month} onHandleChange={this.handleChange} message={monthErrorMessage} errorClassName={monthErrorClassName} />
                    <Input label="Year" placeholder="YYYY" classtAtr="year" idAttr="year" value={year} onHandleChange={this.handleChange} message={yearErrorMessage} errorClassName={yearErrorClassName} />
                    
                </div>

                <div className="border">
                    <div className="hr"></div>
                    <img src={iconArrow} alt="icon-arrow" className="calculate-button" />
                </div>
            </form>
        );
    }
}
