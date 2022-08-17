const { Router } = require('express');

const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userMiddleware.emailPasswordChecker, userController.createUser);


userRouter.get('/:userId', userMiddleware.idIsValidChecker, userController.getUserById);
userRouter.delete('/:userId', userMiddleware.idIsValidChecker, userController.deleteUserById);
userRouter.put('/:userId', userMiddleware.idIsValidChecker, userMiddleware.emailPasswordChecker, userController.updateUserById);


module.exports = userRouter;