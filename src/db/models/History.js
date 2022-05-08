const connection = require("../initDb");
const { DataTypes } = require("sequelize");
const Wagon = require("./Wagon");
const Warehouse = require("./Warehouse");
const HistoryModel = connection.define(
  "event",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

HistoryModel.belongsTo(Wagon, { foreignKey: "wagonId" });
HistoryModel.belongsTo(Warehouse, { foreignKey: "warehouseId" });
HistoryModel.sync({ alter: true });
module.exports = HistoryModel;
