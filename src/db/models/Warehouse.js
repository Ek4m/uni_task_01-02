const connection = require("../initDb");
const { DataTypes } = require("sequelize");

const WarehouseModel = connection.define(
  "warehouse",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opensIn: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    closesIn: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

WarehouseModel.sync({ alter: true });
module.exports = WarehouseModel;
