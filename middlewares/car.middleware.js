const { statusCode } = require("../constants");
const { ApiError } = require('../errors');
const { carService, userService } = require("../services");


module.exports = {
    checkIsCarBodyValid: async (request, response, next) => {
        try {
            const { model, year } = request.body;
            if (model.length < 2 || !model.length) {
                return next(new ApiError('Model must be more than two charachters', statusCode.BAD_REQUEST));
            }
            if (year < 1990) {
                return next(new ApiError('Year must be more than 1990', statusCode.BAD_REQUEST));
            }
            next();
        } catch (e) {
            next(e);
        }
    },
    isCarPresent: async (request, response, next) => {
        try {
            const { carId } = request.params;
            const car = await carService.getCarById(carId);
            if (!car) {
                return next(new ApiError('Car is not found', statusCode.NOT_FOUND));
            }
            request.car = car;
            next();
        } catch (e) {
            next(e);
        }
    }
}