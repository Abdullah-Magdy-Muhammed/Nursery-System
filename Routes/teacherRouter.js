const express = require("express");
const { body, query, param, validationResult } = require("express-validator");
const controller = require('./../Controller/teacherController');
const validator = require("./../Middlewares/errorValidation");

const router = express.Router();


router.route("/teacher")
    .get(controller.getAllTeachers)
    .post([
        body("id").isInt().withMessage("Id should be integer"),
        body("fullName").isAlpha().withMessage("Full Name should be string")
            .isLength({ max: 30 }).withMessage("length of name less Than 30"),
        body("password").isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        }).withMessage("Your Password Should have lower case, upper case, number & symbols"),
        body("email").isEmail().withMessage("Enter Valid E-Mail"),
        body("image").isString().withMessage("Please Enter valid url")

    ],
        validator, controller.addTeacher)
    .put(controller.updateTeacher)

router.get("/teacher/:id",
    controller.getTeacherByID)

router.delete("/teacher/:id",
    controller.deleteTeacherByID)


module.exports = router;