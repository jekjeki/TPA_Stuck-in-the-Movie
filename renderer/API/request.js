const api_key = '704bc6b7f2f0f33276ad9fa6a5a6689e';

const reqmovies = {
    moviesPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`,
    moviesTop: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
    moviesSearch: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`
}

export default reqmovies;

