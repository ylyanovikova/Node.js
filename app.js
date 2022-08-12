const fs = require('fs').promises;

const express = require('express');

const fileService = require('./servises/files.servise');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (request, response) => {
    const users = await fileService.getUsers();
    response.json(users)
});

app.post('/users', async (require, response) => {
    const { email, password } = require.body;

    if (email === null || !email.includes("@") || email.length < 5) {
        response.status(400).json("Enter correct email");
        return;
    };
    if (password === null || password.length < 8) {
        response.status(400).json("Password must be more or equile 8 charachters and consists of at least 1 number");
        return;
    };
    const user = await fileService.createUser({ email, password });
    response.status(201).json(user);
});

app.get('/users/:userId', async (request, response) => {
    const {userId} = request.params;

    if(Number.isNaN(+userId)){
        response.status(400).json("Wrong user id")
    }
    const user = await fileService.getUserById(+userId);
    if(!user){
        response.status(404).json("User not found");
        return;
    }else{
        response.json(user)
    }
})


app.listen(5000, () => {
    console.log("Listen 5000");
})