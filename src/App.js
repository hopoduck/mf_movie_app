import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    console.log(movies);
    this.setState({ movies, isLoading: false });
    // return movies;
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading</span>
          </div>
        ) : (
          // <div class="movies"></div>
          movies.map((movie) => (
            <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
          ))
        )}
      </section>
    );
  }
}

export default App;
