const connection = require("../initDb");
const { DataTypes } = require("sequelize");
const EngineType = require("./EngineType");
const TrainModel = connection.define(
  "train",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: "#000000",
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "default.jpg",
    },
  },
  {
    timestamps: true,
  }
);
TrainModel.belongsTo(EngineType, { foreignKey: "engineType" });
TrainModel.sync({ alter: true });
module.exports = TrainModel;
