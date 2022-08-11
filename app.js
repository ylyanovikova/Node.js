const fs = require('fs').promises;
const { response, request } = require('express');
const express = require('express');
const users = require('./dataBase/users.json');
const fileService = require('./servises/files.servise');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async(request, response)=>{
    let users = await fileService.getUsers();
    response.json(users)
});

app.get('/users/:userId', (request, response)=>{
    const {userId} = request.params;
    if(Number.isNaN(+userId) || +userId < 0){
        response.status(400).json('Wrong user id');
        return;
    }
    const user = users[userId];

    if(!user){
        response.status(404).json('User not found');
    }
});

app.post('/users', (request, response)=>{
    const { email, password } = request.body;
    const includeNumber = /\d/;
    
    // if(email === null || password === null || password.length() < 6 || !email.includes('@') || includeNumber.password){
    //     response.status(400).json('Enter correct email and password need to include at least 1 number and consist of 6 more characters')
    // } else{
        // console.log(email, password)
        fileService.insertUser({email, password});
        response.json('ok')
    // }
})








app.listen(5000, () => {
    console.log("Listen 5000");
})