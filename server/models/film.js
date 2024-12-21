const { Model, DataTypes } = require("sequelize");
const connection = require("./db");  

class Film extends Model {}

Film.init(
    {
        title:{
            type: DataTypes.STRING,
        },
        genre:{
            type: DataTypes.ENUM("Action","Aventure","Comédie","Drame","Romance","Horreur","Science-fiction"," Fantasy","Thriller","Documentaire","Animation","Historique"),
        },
        time:{
            type: DataTypes.INTEGER,
        },
        grade:{
            type: DataTypes.INTEGER,
        },
        releaseDate:{
            type: DataTypes.DATE,
        },
        director:{
            type: DataTypes.STRING,
        },
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    },
    {
        sequelize: connection,
        tableName: Film,
        timestamps: true
    }
);
module.exports = Film;
