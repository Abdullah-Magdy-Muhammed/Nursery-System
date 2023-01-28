const { request, response } = require("express");
const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
    let token;
    try {
        token = request.get("Authorization").split(" ")[1];
        decodedToken = jwt.verify(token, "privateKeyForMe");
        request.role = decodedToken.role;
        request.id = decodedToken.id;
    } catch (error) {
        let errorObject = new Error("Not Authenticated!");
        errorObject.status = 403;
        next(errorObject);
    }
    // handle passing 
    next();
}
module.exports.checkAdmin = (request, response, next) => {
    if (request.role == "admin") {
        next();
    } else {
        let errorObject = new Error("Not Authenticated!");
        errorObject.status = 403;
        next(errorObject);
    }
}
module.exports.checkTeacher = (request, response, next) => {
    if (request.role == "teacher" && request.id == request.params.id) {
        next();
    } else {
        let errorObject = new Error("Not Authenticated!");
        errorObject.status = 403;
        next(errorObject);
    }
}
module.exports.checkAdminOrTeacher = (request, response, next) => {
    if (request.role == "teacher" || request.role == "admin") {
        next();
    } else {
        let errorObject = new Error("Not Authenticated!");
        errorObject.status = 403;
        next(errorObject);
    }
}