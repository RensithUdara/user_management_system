const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers((req , res, next) => {
        res.send(users);
    })
});

app.post('/createuser', (req, res) => {
    controller.addUsers(req.body ,(callack) => {
        res.send();
    });
});

app.post('/updateuser', (req, res) => {
    controller.updateUsers(req.body ,(callback) => {
        res.send(callback);
    });
});

app.post('/deleteeuser', (req, res) => {
    controller.deleteUsers(req.body ,(callback) => {
        res.send(callback);
    });
});

module.exports = app;