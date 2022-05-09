const multer = require("multer");
const EngineTypeModel = require("../db/models/EngineType");
const TrainModel = require("../db/models/Train");
const upload = require("../util/multer");

exports.getAllTrains = async (req, res, next) => {
  try {
    const trains = await TrainModel.findAll({
      include: { model: EngineTypeModel },
    });
    res.render("pages/trains", {
      data: trains,
      title: "All Trains",
    });
  } catch (e) {
    next(e);
  }
};

exports.getAddNewTrain = async (req, res) => {
  try {
    const engineTypes = await EngineTypeModel.findAll();
    res.render("pages/addtrain", {
      engineTypes: engineTypes,
      title: "New Train",
    });
  } catch (e) {
    next(e);
  }
};

exports.postAddNewTrain = async (req, res, next) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      next(err);
    } else if (err) {
      next(err);
    }
    try {
      const newTrain = TrainModel.build({
        ...req.body,
        image: req.file ? req.file.filename : "default.jpg",
      });
      await newTrain.validate();
      await newTrain.save();
      res.redirect("/trains");
    } catch (e) {
      next(e);
    }
  });
};

exports.deleteTrain = async (req, res, next) => {
  try {
    if (req.query.id) {
      await TrainModel.destroy({ where: { id: req.query.id } });
    }
    res.redirect("/trains");
  } catch (e) {
    res.status(500).json(e);
  }
};
