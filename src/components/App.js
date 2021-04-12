import Header from './header/Header';
import Search from './search/Search';
import Movie from './movie/Movie'
import React,{useState,useEffect} from 'react'
import './App.css';

const App = () => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setError] = useState(null)

  const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(response => {
        setMovies(response.Search);
        setLoading(false);
      });
  }, []);

  const search = searchValue =>{

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
        .then(response =>response.json())
        .then(response =>{
          if(response.Response === 'True'){
            setMovies(response.Search);
            setLoading(false);
          } 
            else{
              setError(response.Error)
              setLoading(true)
            }

        })
       
  }


  return (
    <div className="App">
      <Header text="Let's use Hook" />
      <Search search={search} />
      <div className="movie-container">
      {loading && !errorMsg ? 
                  <span>Loading...</span> :
                       errorMsg ? 
                          <div>{errorMsg}</div> :
                            (movies.map(movie =>{
                    return  <Movie movie={movie} /> })
                            )}
      </div>
      
    </div>
  );
}

export default App;
