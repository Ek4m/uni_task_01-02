const connection = require("../initDb");
const { DataTypes } = require("sequelize");
const WagonTypeModel = require("./WagonType");
const TrainModel = require("./Train");

const WagonModel = connection.define(
  "wagon",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: "#000000",
    },
  },
  {
    timestamps: true,
  }
);
WagonModel.belongsTo(WagonTypeModel, { foreignKey: "wagonType" });
WagonModel.belongsTo(TrainModel, { foreignKey: "trainId" });
WagonModel.sync({ alter: true });
module.exports = WagonModel;
