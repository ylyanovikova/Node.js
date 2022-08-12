const fs = require('fs/promises');

const usersDB = require('../dataBase/users.json');


const filePath = "./dataBase/users.json";

module.exports = {
    insertUser: async (userObj) => {
        // const user = JSON.parse(userObj);
        const data = await fs.readFile(filePath);
        const usersFromDB = JSON.parse(data)
        const users = usersFromDB.users;
        users.push(userObj);
        const newUsers = JSON.stringify(users);
        fs.writeFile(filePath, `{"users": ${newUsers}}`);

        return userObj;
    },
    getUsers: async () => {
        const data = await fs.readFile('./dataBase/users.json');
        const usersObj = JSON.parse(data);
        const {users} = usersObj;
        return users;
    },
    getUserById: async(id) =>{
        const data = await fs.readFile('./dataBase/users.json');
        const usersObj = await JSON.parse(data);
        const {users} = await usersObj;
        const user = await users[id];
        return user
    }
}