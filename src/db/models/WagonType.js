const connection = require("../initDb");
const { DataTypes } = require("sequelize");

const WagonTypeModel = connection.define(
  "wagontype",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

WagonTypeModel.sync({ alter: true });
module.exports = WagonTypeModel;
