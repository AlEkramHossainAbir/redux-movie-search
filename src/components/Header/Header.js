import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import logo from './../../images/user.png'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">Movie App Name</div>
                <div className="user-image">
                    <img src={logo} alt="user" />
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/movie/:imdbID">Details</Link>
                </div>
            </div>
        )
    }

}