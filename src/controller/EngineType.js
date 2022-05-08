const EngineTypeModel = require("../db/models/EngineType");

exports.getAllEngineTypes = async (req, res, next) => {
  try {
    const trains = await EngineTypeModel.findAll();
    res.render("pages/enginetypes", {
      data: trains,
      title: "All Trains",
    });
  } catch (e) {
    next(e);
  }
};

exports.getAddEngineType = (req, res) => {
  res.render("pages/addenginetype",{
      title:"New engine type"
  });
};


exports.postAddEngineType = async (req, res) => {
    try {
       const newEngineType = EngineTypeModel.build(req.body);
       await newEngineType.validate();
       await newEngineType.save();
       res.redirect("/engine-types");
      } catch (e) {
        next(e);
      }
  };
  

exports.deleteEngineType = async (req, res, next) => {
    try {
      if (req.query.id) {
        await EngineTypeModel.destroy({
          where: {
            id: req.query.id,
          },
        });
      }
      res.redirect("/engine-types");
    } catch (e) {
      res.status(500).json(e);
    }
  };
  