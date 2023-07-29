import React, { Component } from 'react'
import Input from './Input';
import iconArrow from '../assets/images/icon-arrow.svg';

export default class Form extends Component {
    state = {
        day: '',
        month: '',
        year: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.getAttribute('name')]: e.target.value,
        })
    }

    render() {
        const { day, month, year } = this.state;
        return (
            <form className="inputs-section">
                    
                <div className="form-inputs-group">

                    <Input label="Day" placeholder="DD" classtAtr="day" idAttr="day" value={day} onHandleChange={this.handleChange} />
                    <Input label="Month" placeholder="MM" classtAtr="month" idAttr="month" value={month} onHandleChange={this.handleChange} />
                    <Input label="Year" placeholder="YYYY" classtAtr="year" idAttr="year" value={year} onHandleChange={this.handleChange} />
                    
                </div>

                <div className="border">
                    <div className="hr"></div>
                    <img src={iconArrow} alt="icon-arrow" className="calculate-button" />
                </div>
            </form>
        );
    }
}
