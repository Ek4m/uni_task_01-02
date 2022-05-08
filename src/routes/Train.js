const {
  getAllTrains,
  getAddNewTrain,
  postAddNewTrain,
  deleteTrain,
} = require("../controller/Train");

const Route = require("express").Router();

Route.get("/", getAllTrains);
Route.get("/add", getAddNewTrain);
Route.post("/add", postAddNewTrain);
Route.get("/delete", deleteTrain);

module.exports = Route;
