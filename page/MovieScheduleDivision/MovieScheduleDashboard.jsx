import React from "react";
import './style/movieScheduleStyle.css';
import NavbarTop from "renderer/component/NavbarTop";
import Navbar from "renderer/component/Navbar";
import { Link } from "react-router-dom";

const MovieScheduleDashboard = () => {
    return (
        <div className="box-mov">
            <Navbar />
            <div>
                <NavbarTop />   
                <p>movie schedule dashboard</p>
            </div>
        </div>
    )
}

export default MovieScheduleDashboard;



