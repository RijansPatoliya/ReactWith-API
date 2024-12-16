import React, { useState, useEffect } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners"; 
import { apikey, url, imgBaseUrl } from "./Config";

const Movies = () => {
  const Rows = ({ movies }) => {
    return (
      <div className="movie-rows">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={
                movie.poster_path
                  ? `${imgBaseUrl}/${movie.poster_path}`
                  : "/path/to/fallback-image.jpg" 
              }
              alt={movie.title}
            />
            {/* Movie Title */}
            <h3>{movie.title}</h3>

            {movie.vote_average && (
              <div className="rating">{movie.vote_average}</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const [moviesData, setMoviesData] = useState([]);
  const[loader,setLoader] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(
          `${url}/movie/popular?api_key=${apikey}&language=en-US&page=1`
        );
        setMoviesData(data.results);
        setTimeout(()=>{
            setLoader(false)
        },2000);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  if (loader) {
      return (
        <div className="loader-container">
         <PacmanLoader
    color="#ffffff"
    margin={1}
  />
        </div>
      );
    }
  

  return (
    <>
      <Rows movies={moviesData} />
    </>
  );
};

export default Movies;
