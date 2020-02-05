const rawMaterial = require("../models/rawMaterial.model");
const historyController = require("./budget.controller");

const createRawMaterial = async (req, res, next) => {
  try {
    const data = await rawMaterial.create(req.body);
    historyController.addHistory({ ...req.body, id: data._id }, true);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

const getRawMaterials = async (req, res, next) => {
  try {
    const data = await rawMaterial.find({});
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateRawMaterial = async (req, res, next) => {
  try {
    const newItem = await rawMaterial.findByIdAndUpdate(
      req.params.rawMaterialId,
      req.body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    if (!newItem) return res.sendStatus(404);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
};

const deleteRawMaterial = async (req, res, next) => {
  try {
    const deleted = await rawMaterial.findByIdAndDelete(
      req.params.rawMaterialId
    );
    if (!deleted) return res.status(404).json({ message: "Internal error" });
    res.redirect("back");
    historyController.deleteHistory(req.params.rawMaterialId);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRawMaterial,
  deleteRawMaterial,
  updateRawMaterial,
  getRawMaterials
};
