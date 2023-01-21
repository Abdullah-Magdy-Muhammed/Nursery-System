const express = require("express");
const { body, query, param, validationResult } = require("express-validator");
const router = express.Router();
const validator = require("./../Middlewares/errorValidation");
const expressValidator = require("./../Middlewares/validation");
const controller = require('./../Controller/classController');

router.route("/class")
    .get(controller.getAllClass)
    .post(expressValidator.classValidator, validator, controller.addClass)
    .put(expressValidator.classValidator, validator, controller.updateClass)
    .delete(controller.deleteClassByID)

router.get("/class/:id",
    controller.getClassByID)

router.delete("/class/:id",
    validator,
    controller.deleteClassByID)

router.get("/classchildern/:id",
    controller.getClassChildren)

router.get("/classTeacher/:id",
    controller.getClassTeacher)

module.exports = router;