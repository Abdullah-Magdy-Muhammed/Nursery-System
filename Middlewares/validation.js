const { body, query, param, validationResult } = require("express-validator");

exports.teacherValidation = [
    body("fullName").isString().withMessage("Full Name should be string")
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

]
exports.classValidator = [
    body("name").isString().withMessage("Name should be string")
        .isLength({ max: 30 }).withMessage("length of name less Than 30"),
    body("supervisor").isMongoId().withMessage("Supervisor ID should be object id"),
    body("children").isArray({ min: 10, max: 50 }).withMessage("class should have at least ten student and max 50 students"),
]
exports.childValidator = [
    body("name").isString().withMessage("Full Name should be string")
        .isLength({ max: 30 }).withMessage("length of name less Than 30"),
    body("age").isInt({
        min: 5,
        max: 15
    }).withMessage("Child age between 5 to 15"),
    body("level").isIn(["PreKG", "KG1", "KG2"]).withMessage("Your level should in PreKG, KG1, KG2"),
    body("address").isObject().withMessage("Address  must be a object"),
    body("address.city").isString().withMessage("City should be a string"),
    body("address.street").isString().withMessage("Street should be string"),
    body("address.building").isNumeric().withMessage("Building should be number")]