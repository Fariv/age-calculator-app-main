import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const { label, placeholder, classtAtr, idAttr, value, onHandleChange, errorClassName, message } = this.props;
        let messageHtml = '';
        if (message.length > 0) {
            messageHtml = <span className='error-span'>{ message }</span>
        }
        return (
            <div className={"input-container day-input-container " + errorClassName}>
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
                    {messageHtml}
                </div>
            </div>
        )
    }
}
