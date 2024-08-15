import "./home.css";
import logo from "../../../imgs/logo.png";
import { useEffect, useState } from "react";

const moviesLocal = {
  results: [
    {
      original_title: "Stranger Things",
      overview:
        "When a young boy vanishes. a small own uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl",
      backdrop_path:
        "https://www.usatoday.com/gcdn/presto/2018/10/26/USAT/5f994e49-9ede-4406-aa39-b4729544c95d-ST_Companion_Cover.jpg?crop=2191,1232,x0,y190&width=2191&height=1232&format=pjpg&auto=webp",
      poster_path:
        "https://ew.com/thmb/Qzsbx-sFeTeRO7PAvgYeuS_SOKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stranger-things_worlds-turned-upside-down_cover2-2000-0cef7606915c446ba727bb541a6576c0.jpg",
    },
    {
      title: "Stranger Things",
      description:
        "When a young boy vanishes. a small own uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl",
      cover:
        "https://www.usatoday.com/gcdn/presto/2018/10/26/USAT/5f994e49-9ede-4406-aa39-b4729544c95d-ST_Companion_Cover.jpg?crop=2191,1232,x0,y190&width=2191&height=1232&format=pjpg&auto=webp",
      poster_path:
        "https://ew.com/thmb/Qzsbx-sFeTeRO7PAvgYeuS_SOKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stranger-things_worlds-turned-upside-down_cover2-2000-0cef7606915c446ba727bb541a6576c0.jpg",
    },
    {
      title: "Stranger Things",
      description:
        "When a young boy vanishes. a small own uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl",
      cover:
        "https://www.usatoday.com/gcdn/presto/2018/10/26/USAT/5f994e49-9ede-4406-aa39-b4729544c95d-ST_Companion_Cover.jpg?crop=2191,1232,x0,y190&width=2191&height=1232&format=pjpg&auto=webp",
      poster_path:
        "https://ew.com/thmb/Qzsbx-sFeTeRO7PAvgYeuS_SOKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stranger-things_worlds-turned-upside-down_cover2-2000-0cef7606915c446ba727bb541a6576c0.jpg",
    },
    {
      title: "Stranger Things",
      description:
        "When a young boy vanishes. a small own uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl",
      cover:
        "https://www.usatoday.com/gcdn/presto/2018/10/26/USAT/5f994e49-9ede-4406-aa39-b4729544c95d-ST_Companion_Cover.jpg?crop=2191,1232,x0,y190&width=2191&height=1232&format=pjpg&auto=webp",
      poster_path:
        "https://ew.com/thmb/Qzsbx-sFeTeRO7PAvgYeuS_SOKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stranger-things_worlds-turned-upside-down_cover2-2000-0cef7606915c446ba727bb541a6576c0.jpg",
    },
    {
      title: "Stranger Things",
      description:
        "When a young boy vanishes. a small own uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl",
      cover:
        "https://www.usatoday.com/gcdn/presto/2018/10/26/USAT/5f994e49-9ede-4406-aa39-b4729544c95d-ST_Companion_Cover.jpg?crop=2191,1232,x0,y190&width=2191&height=1232&format=pjpg&auto=webp",
      poster_path:
        "https://ew.com/thmb/Qzsbx-sFeTeRO7PAvgYeuS_SOKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stranger-things_worlds-turned-upside-down_cover2-2000-0cef7606915c446ba727bb541a6576c0.jpg",
    },
    {
      title: "Stranger Things",
      description:
        "When a young boy vanishes. a small own uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl",
      cover:
        "https://www.usatoday.com/gcdn/presto/2018/10/26/USAT/5f994e49-9ede-4406-aa39-b4729544c95d-ST_Companion_Cover.jpg?crop=2191,1232,x0,y190&width=2191&height=1232&format=pjpg&auto=webp",
      poster_path:
        "https://ew.com/thmb/Qzsbx-sFeTeRO7PAvgYeuS_SOKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stranger-things_worlds-turned-upside-down_cover2-2000-0cef7606915c446ba727bb541a6576c0.jpg",
    },
    {
      title: "Stranger Things",
      description:
        "When a young boy vanishes. a small own uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl",
      cover:
        "https://www.usatoday.com/gcdn/presto/2018/10/26/USAT/5f994e49-9ede-4406-aa39-b4729544c95d-ST_Companion_Cover.jpg?crop=2191,1232,x0,y190&width=2191&height=1232&format=pjpg&auto=webp",
      poster_path:
        "https://ew.com/thmb/Qzsbx-sFeTeRO7PAvgYeuS_SOKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stranger-things_worlds-turned-upside-down_cover2-2000-0cef7606915c446ba727bb541a6576c0.jpg",
    },
    {
      title: "Stranger Things",
      description:
        "When a young boy vanishes. a small own uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl",
      cover:
        "https://www.usatoday.com/gcdn/presto/2018/10/26/USAT/5f994e49-9ede-4406-aa39-b4729544c95d-ST_Companion_Cover.jpg?crop=2191,1232,x0,y190&width=2191&height=1232&format=pjpg&auto=webp",
      poster_path:
        "https://ew.com/thmb/Qzsbx-sFeTeRO7PAvgYeuS_SOKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stranger-things_worlds-turned-upside-down_cover2-2000-0cef7606915c446ba727bb541a6576c0.jpg",
    },
  ],
};

export function Home() {
  const [movies, setMovies] = useState();
 // useEffect(() => {
 //   const options = {
 //     method: "GET",
 //     headers: {
 //       accept: "application/json",
 //       Authorization:
 //         "Bearer use token here
  //     },
 //   };
//
 //   fetch(
 //     "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
 //     options
 //   )
 //     .then((response) => response.json())
 //     .then((response) => setMovies(response))
 //     .catch((err) => console.error(err));
 // }, []);
 // if (!movies) return null;

  return (
    <div className="home-container">
      <div className="home-header-holder">
        <header className="home-header">
          <div className="home-header-logo-and-options-holder">
            <img src={logo} className="home-header-logo"></img>
            <a>TV Shows</a>
            <a>Movies</a>
            <a>Recently Added</a>
            <a>My List</a>
          </div>
          <a>🔍</a>
        </header>
      </div>

      <div className="movie-holder">
        <img
          src={moviesLocal.results[0].backdrop_path}
          className="movie-cover"
        ></img>
        <div className="movie-details">
          <h1 className="movie-title">{moviesLocal.results[0].original_title}</h1>
          <p className="movie-description">{moviesLocal.results[0].overview}</p>
          <div className="movie-options">
            <button className="play-movie-button">Play</button>
            <button className="my-list-button">+ My List</button>
          </div>
        </div>
        <div className="home-carousel-holder">
          <h2>Popular on Netflix</h2>
          <div className="home-carousel">
            {moviesLocal.results.map((movie) => {
              return (
                <>
                  <img
                    key={movie.id}
                    className="small-cover"
                    src={movie.poster_path}
                  ></img>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
