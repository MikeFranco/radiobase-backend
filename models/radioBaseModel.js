const { model, Schema } = require('mongoose');

const radioBaseSchema = new Schema(
  {
    RADIOBASE: {
      type: String
    },
    FECHA: {
      type: String
    },
    REGION: {
      type: Number
    },
    TRAFICO: {
      type: Number
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('RadioBase', radioBaseSchema);
