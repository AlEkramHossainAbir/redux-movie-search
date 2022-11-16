import React from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";



export default class Home extends React.Component {
    componentDidMount(){
        const dispatch = useDispatch();
        const movieTiele= "Harry"
        const fetchMovies = async () =>{
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