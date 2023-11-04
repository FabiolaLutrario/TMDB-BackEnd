const User = require("../models/User");
const Favorite = require("../models/Favorite");

class FavoritesController {
  static addToFavorites(req, res) {
    const { userId } = req.body;
    const film = {
      film_id: req.params.filmId,
      media_type: req.params.mediaType,
    };

    User.findByPk(userId).then((user) => {
      if (!user) return res.sendStatus(401);
      Favorite.create(film)
        .then((favorite) => {
          favorite.setUser(user);
          res.send(favorite);
        })
        .catch((err) => console.log(err));
    });
  }

  static getFavoritesByUser(req, res) {
    Favorite.findAll({ where: { userId: req.params.userId } }).then(
      (favorites) => res.send(favorites)
    );
  }

  static deleteByFilmId(req, res) {
    Favorite.destroy({
      where: {
        film_id: req.params.filmId,
      },
    })
      .then(() => res.sendStatus(202))
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el producto" });
      });
  }
}

module.exports = FavoritesController;
