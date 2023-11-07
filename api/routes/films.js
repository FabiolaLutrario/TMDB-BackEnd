const express = require("express");
const FilmsController = require("../controllers/films");
const router = express.Router();

router.get("/:mediaType/:filmId", FilmsController.searchFilmById);
router.get("/:filmName", FilmsController.multiSearchFilmsByName);
router.get("/movie/:filmId", FilmsController.searchMovieById);
router.get("/tv/:filmId", FilmsController.searchTvById);
router.get("/trending/all/day", FilmsController.searchFilmsTrending);
router.get("/movie/upcoming", FilmsController.searchMoviesUpcoming);
router.get("/trending/person/day", FilmsController.searchActorsTrending);

module.exports = router;
