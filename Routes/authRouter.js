const express = require("express");
const { body, query, param, validationResult } = require("express-validator");
const controller = require('./../Controller/authController');
const validator = require("./../Middlewares/errorValidation");
const expressValidation = require("./../Middlewares/validation")

const router = express.Router();

router.route("/login")
    .post(controller.login)


module.exports = router;