const { Model, DataTypes } = require("sequelize");
const User = require("./User");
const db = require("../config/index");

class Favorite extends Model {}

Favorite.init(
  {
    film_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    media_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorite" }
);

Favorite.belongsTo(User);

module.exports = Favorite;
