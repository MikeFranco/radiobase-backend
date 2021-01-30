const RadioBase = require('../models/radioBaseModel.js');

exports.getRadioBases = async (req, res) => {
  const { region, radio_base } = req.query;

  if(region){
    const getRadioBaseByRegion = await RadioBase.find({
      REGION: region
    })/* .skip(0) .limit(5)*/;
    res.json({ status: true, getRadioBaseByRegion });
  } else {
    const getRadioBaseByName = await RadioBase.find({
      RADIOBASE: radio_base
    })/* .skip(0) .limit(5)*/;
    res.json({ status: true, getRadioBaseByName });
  }

};
