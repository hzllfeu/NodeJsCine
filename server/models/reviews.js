const { Model, DataTypes } = require("sequelize");
const connection = require("./db");  

class Reserv extends Model {}

Reserv.init(
    {
      nbSalle:{
        type: DataTypes.INTEGER,
    },
      nbPlace:{
        type: DataTypes.INTEGER,
      },
      // connect to film.js ?
      film:{
        type: DataTypes.STRING,
      }
    },
    {
      sequelize: connection,
    }
);

module.exports = Reserv;