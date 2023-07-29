import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const { label, placeholder, classtAtr, idAttr, value, onHandleChange } = this.props;
        return (
            <div className="input-container day-input-container">
                <label>{label}</label>
                <div>
                    <input 
                        name={idAttr} 
                        className={classtAtr} 
                        id={idAttr} 
                        placeholder={placeholder} 
                        value={value} 
                        onChange={onHandleChange} 
                    />
                </div>
            </div>
        )
    }
}
