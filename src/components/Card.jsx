import React, { Component } from 'react'
import Form from './Form';
import Result from './Result';

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <Form />
                <Result />
            </div>
        );
    }
}
