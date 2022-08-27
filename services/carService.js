const { Car } = require('../dataBase');

module.exports = {
    createCar(carObject) {
        return Car.create(carObject);
    },
    getCarByParams(filter) {
        return Car.findOne(filter);
    },
    getCarById(id) {
        return Car.findById(id).populate('user');
    },
    updateCarById(carId, newCarobject) {
        return Car.updateOne({ _id: carId }, newCarobject, { new: true });
    },
    deleteCarById(id) {
        return Car.deleteOne({ _id: id });
    }
}