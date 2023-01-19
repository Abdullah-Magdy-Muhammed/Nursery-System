const express = require("express");
const { body, query, param, validationResult } = require("express-validator");
const router = express.Router();
const validator = require("./../Middlewares/errorValidation");
const controller = require('./../Controller/childController')

router.route("/child")
    .get(controller.getAllChild)
    .post([
        body("id").isInt().withMessage("Id should be integer"),
        body("name").isAlpha().withMessage("Full Name should be string")
            .isLength({ max: 30 }).withMessage("length of name less Than 30"),
        body("age").isInt({
            min: 5,
            max: 15
        }).withMessage("Child age between 5 to 15"),
        body("level").isIn(["PreKG", "KG1", "KG2"]).withMessage("Your level should in PreKG, KG1, KG2"),
        body("address").isString().withMessage("Please Enter valid address")

    ],
        validator, controller.addChild)
    .put(controller.updateChild)
    .delete(controller.deleteChild)



router.get("/child/:id",
    controller.getChildByID)

router.delete("/child/:id",
    validator,
    controller.deleteChildByID)

module.exports = router;