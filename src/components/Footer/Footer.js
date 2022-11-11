import React, { Component } from 'react';
import "./Footer.css"
class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer">
                <div>Movie App</div>
                <div>©2021, Movie, Inc. or its affiliates</div>
            </div>
        );
    }
}

export default Footer;