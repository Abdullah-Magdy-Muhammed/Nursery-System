const express = require("express");
const { body, query, param, validationResult } = require("express-validator");
const controller = require('./../Controller/teacherController');
const validator = require("./../Middlewares/errorValidation");
const expressValidation = require("./../Middlewares/validation")

const router = express.Router();



router.route("/teacher")
    .get(controller.getAllTeachers)
    .post(expressValidation.teacherValidation, validator, controller.addTeacher)
    .put(expressValidation.teacherValidation, validator, controller.updateTeacher)
    .delete(controller.deleteTeacherByID)

router.get("/teacher/:id",
    controller.getTeacherByID)

router.delete("/teacher/:id",
    controller.deleteTeacherByID)


module.exports = router;