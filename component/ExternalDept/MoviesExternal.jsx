import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './style/MoviesExternal.css';

const MovieCard = ({movie}) => {

    const navigate = useNavigate();

    return (
        <div className="movie" >
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie.original_title} />
                </div>
                <div>
                    <h4 onClick={() => navigate(`/detail-movie/${movie.id}`)}>{movie.original_title}</h4>
                </div>
                <div>
                    <p>{movie.vote_average}</p>
                </div>
        </div>
    )
}

export default MovieCard;

