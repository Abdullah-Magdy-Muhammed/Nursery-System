const express = require("express");
const morgan = require('morgan');
const server = express();  //open server with http protocol  http://localhost:8080
const teacherRouter = require("./Routes/teacherRouter");
const childRouter = require("./Routes/childRouter");
const classRouter = require("./Routes/classRouter")
const body_parser = require("body-parser");


let port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log("I am listening..............", port);
});

// Morgan MW
server.use(morgan("tiny"))

// Routers (End Points)
server.use(express.json());

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
