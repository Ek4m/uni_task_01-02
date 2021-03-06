const express = require("express");
const WagonTypeRouter = require("./routes/WagonType");
const WagonRouter = require("./routes/Wagon");
const TrainRouter = require("./routes/Train");
const WarehouseRouter = require("./routes/Warehouse");
const EventRouter = require("./routes/Event");
const EngnieTypeRouter = require("./routes/EngineType");
const dataBase = require("./db/initDb");
const path = require("path");

////////////////////App
const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded());

/////////////////////Routes
app.use("/wagon-types", WagonTypeRouter);
app.use("/wagons", WagonRouter);
app.use("/engine-types", EngnieTypeRouter);
app.use("/warehouses", WarehouseRouter);
app.use("/events", EventRouter);
app.use("/trains", TrainRouter);

app.get("*", (req, res, next) => {
  res.render("pages/404", {
    title: "Oops!!!",
  });
});

/////////////////////Initialization
dataBase.sync().then(() => {
  console.log("Connected to DB");
  app.listen(3000, () => {
    console.log("Listening");
  });
});
