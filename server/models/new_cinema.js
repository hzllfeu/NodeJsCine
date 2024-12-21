const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Cinema extends Model {}

Cinema.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numberPlace: {
            type: DataTypes.INTEGER, 
            allowNull: false,
        },
        currentTime: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdDate: { 
            type: DataTypes.DATE,
            allowNull: false,
        },
        numberPerson: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        organization: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {
        sequelize: connection,
        tableName: "Cinemas", 
        timestamps: false, 
    }
);

module.exports = Cinema;
