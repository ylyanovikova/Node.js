const { carService, userService } = require("../services");
const { statusCode } = require('../constants');

module.exports = {
    createCar: async (request, response, next) => {
        try {
            const { _id, cars } = request.user;
            const car = await carService.createCar({ ...request.body, user: _id });
            await userService.updateUserbyId(_id, { cars: [...cars, car._id] });
            response.status(statusCode.CREATE).json(car);
        } catch (e) {
            next(e);
        }
    },
    getCarById: async (request, response, next) => {
        try {
            const { car } = request;
            response.json(car);
        } catch (e) {
            next(e);
        }
    },
    updateCarById: async (request, response, next) => {
        try {
            const { carId } = request.params;
            const car = await carService.updateCarById(carId, request.body);
            response.json(car);
        } catch (e) {
            next(e);
        }
    },
    deleteCarById: async (request, response, next) => {
        try {
            const { carId } = request.params;
            await carService.deleteCarById(carId);
            response.sendStatus(statusCode.NO_CONTENT);
        } catch (e) {
            next(e);
        }
    }
}