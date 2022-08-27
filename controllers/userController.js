const { statusCode } = require("../constants");
const userService = require("../services/user.service")

module.exports = {
    getAllUsers: async (request, response, next) => {
        try {
            const users = await userService.getAllUsers();
            response.json(users);
        } catch (e) {
            next(e)
        }
    },
    createUser: async (request, response, next) => {
        try {
            const user = await userService.createUser(request.body);
            response.status(statusCode.CREATE).json(user)
        } catch (e) {
            next(e)
        }
    },
    getUserById: async (request, response, next) => {
        try {
            const { user } = request;
            console.log(user);
            response.json(user);
        } catch (e) {
            next(e)
        }
    },
    updateById: async (request, response, next) => {
        try {
            const { userId } = request.params;
            const user = await userService.updateUserbyId(userId, request.body);
            response.json(user);
        } catch (e) {
            next(e)
        }
    },
    deleteUserById: async (request, response, next) => {
        try {
            const { userId } = request.params;
            await userService.deleteUserById(userId);
            response.sendStatus(statusCode.NO_CONTENT);
        } catch (e) {
            next(e);
        }
    }
}