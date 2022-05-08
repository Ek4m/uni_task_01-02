const {
  getWagonTypes,
  getAddNewWagonType,
  postAddNewWagonType,
  deleteWagonType,
} = require("../controller/WagonType");

const Route = require("express").Router();

Route.get("/", getWagonTypes);
Route.get("/delete", deleteWagonType);
Route.get("/add", getAddNewWagonType);
Route.post("/add", postAddNewWagonType);

module.exports = Route;
