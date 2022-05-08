const {
  getWagons,
  getAddNewWagon,
  postAddNewWagon,
  deleteWagon,
} = require("../controller/Wagon");

const Route = require("express").Router();
Route.get("/", getWagons);
Route.get("/add", getAddNewWagon);
Route.post("/add", postAddNewWagon);
Route.get("/delete", deleteWagon);

module.exports = Route;
