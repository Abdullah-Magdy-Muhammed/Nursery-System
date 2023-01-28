require('dotenv').config()

const express = require("express");
const morgan = require('morgan');
const server = express();  //open server with http protocol  http://localhost:8080
const teacherRouter = require("./Routes/teacherRouter");
const childRouter = require("./Routes/childRouter");
const classRouter = require("./Routes/classRouter");
const loginRouter = require("./Routes/authRouter");
const authorization = require("./Middlewares/authorization")
const body_parser = require("body-parser");
const { default: mongoose } = require("mongoose");

let port = process.env.PORT;


// Setting DB connections
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/nurseryDB")
    .then(() => {
        console.log("DB Connected");
        server.listen(port, () => {
            console.log("I am listening..............", port);
        });
    })
    .catch(error => {
        console.log("DB connection problem" + " " + error);
    })


// Morgan MW
server.use(morgan("tiny"))

// Routers (End Points)
server.use(express.json());
server.use(loginRouter);
server.use(authorization);
server.use(teacherRouter);
server.use(childRouter);
server.use(classRouter)

// second MW
server.use((request, response, next) => {
    if (true) {

    }
    response.status(404).json({ message: "Page Not Found " });

});

// Error MiddleWare
server.use((error, request, response, next) => {
    response.status(500).json({ message: "Error " + error });
});
