const { appendFile } = require('fs');
const fs = require('fs/promises');
const usersDB = require('../dataBase/users.json');


const filePath = "./dataBase/users.json";
// const userObj = {email: "rrrr@", password: "jj6jjjjb"};


// fs.appendFile(filePath, JSON.stringify(userObj));

module.exports = {
    insertUser: async (userObj)=>{
        // const user = JSON.parse(userObj);
        const data = await fs.readFile(filePath);
        const usersFromDB = JSON.parse(data)
        const users =  usersFromDB.users;
        users.push(userObj);
        const newUsers = JSON.stringify(users);
        fs.writeFile(filePath, `{"users": ${newUsers}}`);

        return userObj;
    //    await fs.appendFile(filePath, user.toString());
    },
    getUsers: async ()=>{
        return usersDB;
    }
}