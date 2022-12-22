import { async } from "@firebase/util";
import React, { Component, useEffect, useState } from "react";
import {commerce} from '@chec/commerce.js';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './style/DetailMovie.css';
import {collection, addDoc} from 'firebase/firestore';
import { db } from "renderer/config/firebase";


const DetailMovie = (props) => {
    
    const [post, setPost] = useState({});

    let {id} = useParams();


    const addExternalMovie = async () => {
        try {
            const docRef = await addDoc(collection(db, "LicenseMovies"), {
                id: post.id,
                movie_title: post.original_title,
                backdrop_path: post.backdrop_path,
                overview: post.overview,
                release_date: post.release_date,
                vote_average: post.vote_average
            });
            console.log('ID:'+docRef.id);
        } catch (error) {
            
        }
    }

    const fetchDataDetail = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=704bc6b7f2f0f33276ad9fa6a5a6689e`);
        const data = res.json();

        data.then((result) => {
            console.log(result);
            setPost(result);
        });

        
    }

    useEffect(()=>{
        fetchDataDetail();
    }, []);

    return(
        <div className="detailmov-container">
            <div className="wrap-header">
                <div className="wrap-back-movies">
                    <Link to={'/validate-movies'}><p>back</p></Link>
                </div>
                <div className="wrap-title-detail">
                    <h1>Detail Movie</h1>
                </div>
            </div>
            <div className="mov-information">
                <div className="wrap-mov-detail">
                    <img src={`https://image.tmdb.org/t/p/w500/${post.backdrop_path}`} />
                </div>
                <h3>Movie Information</h3>
                <div className="mov-det-item">
                    <p>ID: {post.id}</p>
                </div>
                <div className="mov-det-item">
                    <p>
                    Movie title: {post.original_title}
                    </p>
                </div>
                <div className="mov-det-item">
                    <p>Overview: {post.overview}</p>
                </div>
                <div className="mov-det-item">
                    <p>Popular: {post.popularity}</p>
                </div>
                <div className="mov-det-item">
                    <p>Release Date: {post.release_date}</p>
                </div>
                <div className="mov-det-item">
                    <p>Rate: {post.vote_average}</p>
                </div>
                <div className="mov-det-item">
                    <p>Person Vote: {post.vote_count}</p>
                </div>
            </div>
            <div className="wrap-det-btn">
                <button onClick={()=>addExternalMovie()}>Add to Movie List</button>
            </div>
        </div>
    )
}

export default DetailMovie;