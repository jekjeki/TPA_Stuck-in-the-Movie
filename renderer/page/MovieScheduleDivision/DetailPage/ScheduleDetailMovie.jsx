import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore';
import { db } from "renderer/config/firebase";
import { Link } from "react-router-dom";
import './style/scheduleDetailMovie.css';

const ScheduleDetailMovie = (props) => {

    const [detail, setDetail] = useState([]);
    const [getId, setId] = useState([]);

    let {id} = useParams();

    const navigate = useNavigate();


    const handleDetailLicenseMovie = async () => {
        let list = [];
        const docRef = doc(db, 'LicenseMovies', `${id}`);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists())
        {
            console.log(docSnap.data());
            list.push(docSnap.data());
            setDetail(list);
            setId(docSnap.id);
        }

    }

    useEffect(()=>{
        handleDetailLicenseMovie();
    }, [])

    return (
        <div>
            <div className="schedule-detail-header">
                <div className="back-schedule-dashboard">
                    <p><Link to='/lookLicenseMovies'>back</Link></p>
                </div>
                <div className="wrap-schedule-detail-title">
                    <h3>Detail Movies</h3>
                </div>
            </div>
            <div className="cont-schedule-detail">
                {
                    detail.map((det) => (
                        <div key={det.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${det.backdrop_path}`} />
                            <p>{det.id}</p>
                            <p >{det.movie_title}</p>
                            <p>{det.overview}</p>
                            <p>{det.release_date}</p>
                            <p>{det.vote_average}</p>
                        </div>
                    ))
                }
            </div>
            <div className="wrap-btn-detail-schedule">
                <button onClick={() => navigate(`/schedule-license-detail/form/${getId}`)}>Schedule this movies</button>
            </div>
        </div>
    )
}


export default ScheduleDetailMovie;



