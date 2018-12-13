import React, { Component } from 'react';
import Card from '../CardComponent/index';

class HeaderComponent extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="header-container">
                <div className="header-content">
                    <p>Home Page</p>
                </div>
                <div className="page-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HeaderComponent;