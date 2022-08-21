const User = require('../dataBase/User');

module.exports = {
    createUser(userObj) {
        return User.create(userObj);
    },
    getUserByParams(filter) {
        return User.findOne(filter);
    },
    getUserById(id) {
        return User.findById(id);
    },
    getAllUsers() {
        return User.find();
    },
    updateUserbyId(userId, newUserObject) {
        return User.updateOne({ _id: userId }, newUserObject, { new: true });
    },
    deleteUserById(userId) {
        return User.deleteOne({ _id: userId });
    }
}