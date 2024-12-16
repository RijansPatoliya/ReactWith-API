import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/search/multi", {
          params: {
            api_key: "22116d5baa18e09de7ef06c57be22a44",
            query: query,
          },
        });
        setMovies(response.data.results); 
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]); 

  return (
    <div>
      <h1>Search Results for {query}</h1>
      <div className="movie-results">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            {/* <h3>{movie.title}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
