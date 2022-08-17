const fileService = require('../servises/files.servise');

module.exports = {
    getAllUsers: async (request, response) => {
        const users = await fileService.getUsers();
        response.json(users)
    },
    getUserById: async (request, response) => {
        const { userId } = request.params;

        const user = await fileService.getUserById(+userId);
        if (!user) {
            response.status(404).json("User not found");
            return;
        } else {
            response.json(user);
        }
    },
    createUser: async (request, response) => {
        const user = await fileService.createUser(request.body);
        response.status(201).json(user);
    },
    updateUserById: async (request, response) => {
        const { userId } = request.params;
        const { email, password } = request.body;

        const userObj = {};
        if (email) userObj.email = email;
        if (password) userObj.password = password;

        const user = await fileService.updateUser(+userId, userObj);

        if (!user) {
            response.status(404).json("User not found");
            return;
        } else {
            response.status(201).json(user);
        }
    },
    deleteUserById: async (request, response) => {
        const { userId } = request.params;

        const user = await fileService.deleteUser(+userId);
        if (!user) {
            response.status(404).json("User not found");
            return;
        } else {
            response.sendStatus(204);
        }
    }
}