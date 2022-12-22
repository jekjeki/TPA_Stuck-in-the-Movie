import React, { useEffect, useState } from "react";
import {collection, getDocs} from 'firebase/firestore'
import { db } from "renderer/config/firebase";
import { Link } from "react-router-dom";
import './style/listScheduleMovies.css';

const ListScheduleMovies = () => {

    const [scheduleMovies, setScheduleMovies] = useState([]);

    const ListScheduleMovies = async () => {
        let list = [];
        const querySnapshot = await getDocs(collection(db, 'ScheduleMovies'));
        querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()});
            console.log(doc.data());
        });
        setScheduleMovies(list);
    }

    useEffect(()=> {
        ListScheduleMovies();
    }, []);

    return (
        <div>
           <div className="wrap-header-list-schedule">
                <div>
                    <p><Link to='/scheduleMovieDashboard'>back</Link></p>
                </div>
                <div className="wrap-list-schedule-title">
                    <p>List Schedule Movies</p>
                </div>
            </div> 
            <div className="container-wrap-list-schedule-card">
                <div className="list-schedule-card">
                    {
                        scheduleMovies.map((sm) => (
                            <div key={sm.id}>
                                <p>{sm.movie_title}</p>
                                <p>{sm.date_play}</p>
                                <p>{sm.time_play}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ListScheduleMovies;



