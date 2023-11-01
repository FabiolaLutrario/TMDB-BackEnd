const User = require("./User");
const Favorite = require("./Favorite");

Favorite.belongsTo(User, { as: "user" });
User.hasMany(Favorite, { as: "favorite" });

module.exports = { User, Favorite };
