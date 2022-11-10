import React from "react"
import { Link } from "react-router-dom"
export default class Header extends React.Component{
    render(){
        return(
            <div>         
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/movie">Movie</Link>
                <Link to="/app">App</Link>
                <Link to="/movie/:imdbID">Details</Link>
            </div>
        )
    }
    
}