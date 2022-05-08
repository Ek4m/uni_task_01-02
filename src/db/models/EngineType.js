const  connection = require("../initDb");
const  { DataTypes } = require("sequelize");

const EngineTypeModel = connection.define('enginetype', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
})



EngineTypeModel.sync({ alter: true });
module.exports = EngineTypeModel;