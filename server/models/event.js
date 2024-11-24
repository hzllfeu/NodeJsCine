const { Model, DataTypes } = require("sequelize");
const connection = require("./db"); 

class Event extends Model {}

Event.init(
    {
        name:{
            type: DataTypes.STRING,
        },
        genre:{
            type: DataTypes.STRING,
        },
        time:{
            type: DataTypes.INTEGER,
        },
        date:{
            type: DataTypes.DATE,
        },
        numberPerson:{
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize: connection,
    }
);

module.exports = Event; 