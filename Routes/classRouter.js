const express = require("express");
const { body, query, param, validationResult } = require("express-validator");
const router = express.Router();
const validator = require("./../Middlewares/errorValidation");
const expressValidator = require("./../Middlewares/validation");
const authorizationMW = require("./../Middlewares/authorization")
const controller = require('./../Controller/classController');
const { request } = require("express");
const mongoose = require("mongoose");
const e = require("express");
const ClassSchema = mongoose.model("class");

router.route("/class")
    .all(authorizationMW.checkAdmin)
    .get(controller.getAllClass)
    .post(expressValidator.classValidator, validator, controller.addClass)
    .put(expressValidator.classValidator, validator, controller.updateClass)
    .delete(controller.deleteClassByID)

router.get("/class/:id",
    controller.getClassByID)

router.delete("/class/:id", authorizationMW.checkAdmin, validator,
    controller.deleteClassByID)

router.get("/classchildern/:id", authorizationMW.checkAdminOrTeacher, (request, response, next) => {
    if (request.role == "teacher") {
        let supervisorId = ClassSchema.findById(request.params.id)
            .then((data) => {
                if (data.supervisor == request.id) {
                    next();
                } else {
                    let errorObject = new Error("Not hhhhh");
                    errorObject.status = 403;
                    next(errorObject);
                }
            })
    } else {
        next();
    }
},
    controller.getClassChildren)

router.get("/classTeacher/:id",
    controller.getClassTeacher)

module.exports = router;