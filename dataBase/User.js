const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, trim: true, required: true, lowercase: true, unique: true},
    password: {type: String, required: true}
},{
    timestamps: true,
    versionKey: true
});

module.exports = model('user', userSchema);