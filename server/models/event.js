const { Model, DataTypes } = require("sequelize");
const connection = require("./db"); 

class Event extends Model {}

Event.init(
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        genre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        time:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        numberPerson:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {
        sequelize: connection,
        tableName: Event,
        timestamps: true
    }
);

module.exports = Event; 