import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from 'renderer/config/firebase';
import { Link, useNavigate } from 'react-router-dom';
import './style/lookLicenseMovie.css';

const LookLicenseMovie = () => {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState([]);
  const navigate = useNavigate();

  const getLicenseMovie = async () => {
    let list = [];

    const querySnapshot = await getDocs(collection(db, 'LicenseMovies'));
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
      setId(doc.id)
    });
    setMovies(list);
    console.log(list);
  };



  useEffect(() => {
    getLicenseMovie();
  }, []);

  return (
    <div>
      <div className='schedule-movie-header'>
        <div className='wrap-schedule-movie-back'>
          <p><Link to='/scheduleMovieDashboard'>back</Link></p>
        </div>
        <div className='wrap-schedule-title'>
          <h3>List License Movies</h3>
        </div>
      </div>
      <div className='container-movie-schedule-card'>
        
            {movies.map((mov) => (
            <div className="schedule-movie-card-comp" key={mov.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${mov.backdrop_path}`} />
                {
                    
                    <p onClick={() => navigate(`/schedule-license-detail/${id}`)}>{mov.movie_title}</p>
                }
                <p>{mov.vote_average}</p>
            </div>
            ))}
       
      </div>
    </div>
  );
};

export default LookLicenseMovie;
