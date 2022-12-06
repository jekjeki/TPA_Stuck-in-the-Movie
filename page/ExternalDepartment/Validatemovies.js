import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import reqmovies from 'renderer/API/request';
import MovieCard from 'renderer/component/ExternalDept/MoviesExternal';
import './style/validate.css';

const ValidateMovies = () => {
  const [movies, setMovies] = useState([]);
//   const [top, setTop] = useState([]);
  const [active, setActive] = useState(false);
  const [select, setSelect] = useState('');
  const [search, setSearch] = useState('');

  const options = ['Popular', 'Trending'];

 


  const fetchMoviesPopular = async () => {
    const res =  await fetch(reqmovies.moviesPopular)  ;
    const data = await res.json();
    console.log(data.results);

    setMovies(data.results);
  };

  const fetchMoviesTop = async () => {
    const res = await fetch(reqmovies.moviesTop);
    const data = await res.json();
    console.log(data.results);

    setMovies(data.results)
  }

  const searchFetchMovies = async(title) => {
    const res = await fetch(`${reqmovies.moviesSearch}&query=${title}`);
    const data = await res.json();
    console.log(data.results);

    setMovies(data.results);
  }

  const getFetchData = (type) => {
    if(select == type)
    {
        fetchMoviesPopular();
    }
  }



  useEffect(() => {
    
    fetchMoviesTop()
    
    fetchMoviesPopular()

    searchFetchMovies('');
    
  }, []);

  return (
    <div className="val-page">
      <div className="search-group">
        <div className="back">
          <p>
            <Link to="/externalDashboard">back</Link>
          </p>
        </div>
        <div className="wrap-search-input">
          <input className="ex-search-movies" onChange={(e) => setSearch(e.target.value)} />
          <div className="wrap-search-btn" onClick={() => searchFetchMovies(search)}>
            <button>Search</button>
          </div>
        </div>
        <div>
            <select value={select} onChange={(e) => setSelect(e.target.value)}>
                <option onClick={() => fetchMoviesPopular()}>Popular</option>
                <option>Trend</option>
            </select>
        </div>
        {/* <div className="dropdown" onClick={(e) => setActive(!active)}>
          <div className="dropdown-btn" onClick={(e) => setSelect(select)}>{select}</div>
          {
            active && (
            <div className="dropdown-content">
                {
                    options.map((opt, id) => (
                        <div className="dropdown-item" key={id} onClick={(e) => setSelect(e.target.textContent)}>{opt}</div>
                    ))
                }
            </div>
            )
          }
        </div> */}
      </div>
      {movies?.length > 0 ? (
        <div className="val-movies-container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ValidateMovies;
