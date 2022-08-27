const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddlewre, commonMiddleware } = require('../middlewares');

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.post(
    '/',
    userMiddlewre.checkIsUserBodyValid,
    userMiddlewre.chechIsUserEmailUniq,
    userController.createUser
);

userRouter.get('/:userId',
    commonMiddleware.checkIsIdValid('userId'),
    userMiddlewre.isUserPresent(),
    userController.getUserById
);
userRouter.put('/:userId',
    commonMiddleware.checkIsIdValid('userId'),
    userMiddlewre.isUserPresent(),
    userMiddlewre.chechIsUserEmailUniq,
    userController.updateById
);
userRouter.delete('/:userId',
    commonMiddleware.checkIsIdValid('userId'),
    userMiddlewre.isUserPresent(),
    userController.deleteUserById
);

module.exports = userRouter;
