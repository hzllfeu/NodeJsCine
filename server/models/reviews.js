const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Review extends Model {}

Review.init(
  {
    contenu: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    film_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "films",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
  }
);

module.exports = Review;