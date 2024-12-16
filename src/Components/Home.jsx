import React, { useEffect, useState } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners"; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Images/8a6a68144592045.png";
import img2 from "../../Images/aea85ebe-c848-4d47-bd46-ff554b0e3609-cover.png";
import img3 from "../../Images/f69643dd-f589-47f1-b78a-b6b6404dd4ab.png";
import img4 from "../../Images/umbrella-academy-season-4-full-trailer-banner.png";
import {apikey,url,imgBaseUrl} from "./Config"

const Row = ({ title, movie }) => {
  return (
    <div className="img-row">
      <h2>{title}</h2>
      <div className="row-img-container">
        {movie.map((i) => (
          <div key={i.id} className="row-img">
            <img src={`${imgBaseUrl}/${i.poster_path}`} alt="Movie Poster" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loader,setLoader]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcomingResponse = await axios.get(
          `${url}/movie/upcoming?api_key=${apikey}&language=en-US&page=1`
        );
        setUpcomingMovies(upcomingResponse.data.results);
  
        const nowPlayingResponse = await axios.get(
          `${url}/movie/now_playing?api_key=${apikey}&language=en-US&page=1`
        );
        setNowPlaying(nowPlayingResponse.data.results);
  
        const popularResponse = await axios.get(
          `${url}/movie/popular?api_key=${apikey}&language=en-US&page=1`
        );
        setPopularMovies(popularResponse.data.results);
  
        const topRatedResponse = await axios.get(
          `${url}/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
        );
        setTopRatedMovies(topRatedResponse.data.results);
  
        setTimeout(() => {
          setLoader(false); 
        }, 1000); 
      } catch (error) {
        console.log("Error fetching movie data:", error);
        setLoader(false); 
      }
    };
  
    fetchData();
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
      <Carousel infiniteLoop autoPlay={true} showArrows={true} showStatus={false} interval={3000} showThumbs={false}  stopOnHover={false}>
        <div>
          <img src={img1} alt="Banner 1" />
        </div>
        <div>
          <img src={img2} alt="Banner 2" />
        </div>
        <div>
          <img src={img3} alt="Banner 3" />
        </div>
        <div>
          <img src={img4} alt="Banner 4" />
        </div>
      </Carousel>

      <div className="row">
        <Row title="Upcoming Movies" movie={upcomingMovies} />
        <Row title="Now Playing" movie={nowPlaying} />
        <Row title="Popular Movies" movie={popularMovies} />
        <Row title="Top Rated Movies" movie={topRatedMovies} />
      </div>
    </>
  );
};

export default Home;
