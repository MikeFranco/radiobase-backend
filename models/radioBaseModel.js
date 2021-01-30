const { model, Schema } = require('mongoose');

const radioBaseSchema = new Schema(
  {
    /* id: {
      type: String
    }, */
    RADIOBASE/* radiobase */: {
      type: String
    },
    FECHA/* fecha */: {
      type: String
    },
    REGION/* region */: {
      type: Number
    },
    TRAFICO/* trafico */: {
      type: Number
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('RadioBase', radioBaseSchema);
