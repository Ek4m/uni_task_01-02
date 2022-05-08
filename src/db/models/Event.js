const connection = require("../initDb");
const { DataTypes } = require("sequelize");
const Wagon = require("./Wagon");
const Warehouse = require("./Warehouse");
const Event = connection.define(
  "event",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["ongoing", "pending", "finished", "cancelled"],
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Event.belongsTo(Wagon, { foreignKey: "wagonId" });
Event.belongsTo(Warehouse, { foreignKey: "warehouseId" });
Event.sync({ alter: true });
module.exports = Event;
