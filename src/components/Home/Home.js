import React from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";



export default class Home extends React.Component {
    componentDidMount(){
        const fetchMovies = async () =>{
            console.log("in")
            const movieTiele= "Harry"
            const response = await MovieApi
            .get(`?&apikey=${APIKey}&s=${movieTiele}&type=movie`)
            .catch((err)=>{
                console.log("Err :",err)
            })
            console.log("The Response From API response",response)
        }
        fetchMovies()
    }
    render() {
        return (
            <div>
                <div className="banner-img"></div>
                <MovieListing />
            </div>
        )
    }
}