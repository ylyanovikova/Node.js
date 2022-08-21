const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    cars: {
        type: [Schema.Types.ObjectId],
        ref: 'Car',
        select: false
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User', userSchema);