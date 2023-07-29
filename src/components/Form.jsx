import React, { Component } from 'react'
import Input from './Input';

export default class Form extends Component {
    render() {
        return (
            <form className="inputs-section">
                    
                <div className="form-inputs-group">

                    <Input label="Day" placeholder="DD" classtAtr="day" idAttr="day" />
                    <Input label="Month" placeholder="MM" classtAtr="month" idAttr="month" />
                    <Input label="Year" placeholder="YYYY" classtAtr="year" idAttr="year" />
                    
                </div>

                <div className="border">
                    <div className="hr"></div>
                    <img src="./assets/images/icon-arrow.svg" alt="icon-arrow" className="calculate-button" />
                </div>
            </form>
        );
    }
}
