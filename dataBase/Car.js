const { model, Schema } = require("mongoose");

const carSchema = new Schema({
    model: { type: String, trim: true, required: true },
    year: { type: Number, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Car', carSchema);