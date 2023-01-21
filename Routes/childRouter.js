const express = require("express");
const { body, query, param, validationResult } = require("express-validator");
const router = express.Router();
const validator = require("./../Middlewares/errorValidation");
const expressValidation = require("./../Middlewares/validation")
const controller = require('./../Controller/childController')

// function to validate address

// const createAddressValidators = (path: string) => [
//     body(`${path}.street`).isLength({ min: 3 }),
//     body(`${path}.number`).exists(),
// ];

router.route("/child")
    .get(controller.getAllChild)
    .post(expressValidation.childValidator, validator, controller.addChild)
    .put(expressValidation.childValidator, validator, controller.updateChild)
    .delete(controller.deleteChildByID)



router.get("/child/:id",
    controller.getChildByID)

router.delete("/child/:id",
    validator,
    controller.deleteChildByID)

module.exports = router;