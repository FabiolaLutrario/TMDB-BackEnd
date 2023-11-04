const axios = require("axios");

class FilmsController {
  static searchById(req, res) {
    const apiKey = "eb7ac5fce53eae88ea5e99a0a131a414";
    const media_type = req.params.mediaType;
    const film_id = req.params.filmId;

    axios
      .get(`https://api.themoviedb.org/3/${media_type}/${film_id}`, {
        params: {
          api_key: apiKey,
          append_to_response: "videos",
        },
      })
      .then((film) => {
        res.send(film.data);
      })
      .catch((err) => console.log(err));
  }

  static multiSearchByName(req, res) {
    const apiKey = "eb7ac5fce53eae88ea5e99a0a131a414";

    axios
      .get(`https://api.themoviedb.org/3/search/multi`, {
        params: {
          api_key: apiKey,
          query: req.params.filmName,
        },
      })
      .then((films) => {
        res.send(films.data);
      })
      .catch((err) => console.log(err));
  }

  static searchMovieById(req, res) {
    const apiKey = "eb7ac5fce53eae88ea5e99a0a131a414";
    const film_id = req.params.filmId;

    axios
      .get(`https://api.themoviedb.org/3/movie/${film_id}`, {
        params: {
          api_key: apiKey,
          append_to_response: "videos",
        },
      })
      .then((movie) => {
        res.send(movie);
      })
      .catch((err) => console.log(err));
  }

  static searchTvById(req, res) {
    const apiKey = "eb7ac5fce53eae88ea5e99a0a131a414";
    const film_id = req.params.filmId;

    axios
      .get(`https://api.themoviedb.org/3/tv/${film_id}`, {
        params: {
          api_key: apiKey,
          append_to_response: "videos",
        },
      })
      .then((tv) => {
        res.send(tv);
      })
      .catch((err) => console.log(err));
  }
}

module.exports = FilmsController;
