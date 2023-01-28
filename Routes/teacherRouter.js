const express = require("express");
const { body, query, param, validationResult, check } = require("express-validator");
const controller = require('./../Controller/teacherController');
const authorizationMW = require("./../Middlewares/authorization")
const validator = require("./../Middlewares/errorValidation");
const expressValidation = require("./../Middlewares/validation")

const router = express.Router();

router.route("/teacher")
    .all(authorizationMW.checkAdmin)
    .get(controller.getAllTeachers)
    .post(expressValidation.teacherValidation, validator, controller.addTeacher)
    .put(expressValidation.teacherValidation, validator, controller.updateTeacher)
    .delete(controller.deleteTeacherByID)

router.get("/teacher/:id",
    authorizationMW.checkTeacher, controller.getTeacherByID)

router.delete("/teacher/:id",
    controller.deleteTeacherByID)


module.exports = router;