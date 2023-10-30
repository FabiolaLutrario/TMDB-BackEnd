const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Favorite extends Model {}

Favorite.init(
  {
    film_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports = Favorite;
