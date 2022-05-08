const {
  getAllEngineTypes,
  getAddEngineType,
  postAddEngineType,
  deleteEngineType,
} = require("../controller/EngineType");

const Route = require("express").Router();

Route.get("/", getAllEngineTypes);
Route.get("/add", getAddEngineType);
Route.post("/add", postAddEngineType);
Route.get("/delete", deleteEngineType);

module.exports = Route;
