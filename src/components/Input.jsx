import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const { label, placeholder, classtAtr, idAttr } = this.props;
        return (
            <div className="input-container day-input-container">
                <label>{label}</label>
                <div>
                    <input className={classtAtr} id={idAttr} placeholder={placeholder} />
                </div>
            </div>
        )
    }
}
