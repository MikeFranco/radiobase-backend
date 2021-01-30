const RadioBase = require('../models/radioBaseModel.js');

exports.getRadioBases = async (req, res) => {
  const getRadioBase = await RadioBase.find();
  res.json({ getRadioBase });
};
