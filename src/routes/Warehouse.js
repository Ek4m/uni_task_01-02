const {
  getAllWarehouses,
  getAddNewWarehouse,
  postAddNewWarehouse,
  deleteWarehouse,
} = require("../controller/Warehouse");

const Route = require("express").Router();

Route.get("/", getAllWarehouses);
Route.get("/add", getAddNewWarehouse);
Route.post("/add", postAddNewWarehouse);
Route.get("/delete", deleteWarehouse);

module.exports = Route;
