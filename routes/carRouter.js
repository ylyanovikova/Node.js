const { Router } = require('express');
const { carController } = require('../controllers');
const { commonMiddleware, carMiddleware, userMiddlewre } = require('../middlewares');

const carRouter = Router();

carRouter.post(
    '/',
    commonMiddleware.checkIsIdValid('userId', 'query'),
    userMiddlewre.isUserPresent('query'),
    carMiddleware.checkIsCarBodyValid,
    carController.createCar
);

carRouter.get(
    '/:carId',
    commonMiddleware.checkIsIdValid('carId'),
    carMiddleware.isCarPresent,
    carController.getCarById
);
carRouter.put(
    '/:carId',
    commonMiddleware.checkIsIdValid('carId'),
    carMiddleware.isCarPresent,
    carMiddleware.checkIsCarBodyValid,
    carController.updateCarById
);
carRouter.delete(
    '/:carId',
    commonMiddleware.checkIsIdValid('carId'),
    carMiddleware.isCarPresent,
    carController.deleteCarById
);

module.exports = carRouter;