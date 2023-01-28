const express = require("express");
const { body, query, param, validationResult } = require("express-validator");
const authorizationMW = require("./../Middlewares/authorization")
const router = express.Router();
const validator = require("./../Middlewares/errorValidation");
const expressValidation = require("./../Middlewares/validation")
const controller = require('./../Controller/childController')

router.route("/child")
    .all(authorizationMW.checkAdmin)
    .get(controller.getAllChild)
    .post(expressValidation.childValidator, validator, controller.addChild)
    .put(expressValidation.childValidator, validator, controller.updateChild)
    .delete(controller.deleteChildByID)



router.get("/child/:id",
    authorizationMW.checkAdmin, controller.getChildByID)

router.delete("/child/:id",
    validator,
    authorizationMW.checkAdmin, controller.deleteChildByID)

module.exports = router;