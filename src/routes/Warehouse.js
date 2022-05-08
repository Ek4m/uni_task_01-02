const {
  getAllWarehouses,
  getAddNewWarehouse,
} = require("../controller/Warehouse");

const Route = require("express").Router();

Route.get("/", getAllWarehouses);
Route.get("/add", getAddNewWarehouse);

module.exports = Route;
