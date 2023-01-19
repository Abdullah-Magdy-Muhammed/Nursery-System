const { response } = require("express");
const { default: mongoose } = require("mongoose");
require("./../Model/childModel");

const ChildSchema = mongoose.model("child");


exports.getAllChild = (request, response, next) => {
    ChildSchema.find()
        .then((data) => {
            response.status(200).json(data);
        })
        .catch((error) => next(error))
}

exports.addChild = (request, response, next) => {
    let newChild = new ChildSchema({
        _id: request.body.id,
        name: request.body.name,
        age: request.body.age,
        address: request.body.address
    })
    newChild.save()
        .then(result => {
            response.status(201).json(result);
        })
        .catch(error => next(error))
}
exports.updateChild = (request, response, next) => {
    ChildSchema.updateOne({
        _id: request.body.id,
    }, {
        $set: {
            name: request.body.name,
            age: request.body.age,
            address: request.body.address
        }
    })
}
exports.getChildByID = (request, response, next) => {
    ChildSchema.findById(request.params.id)
        .then((data) => {
            response.status(200).json(data)
        })
        .catch(error => next(error))
}
exports.deleteChildByID = (request, response, next) => {
    ChildSchema.findByIdAndDelete(request.params.id)
        .then(() => {
            response.status(200).json({ "message": "This Child is Deleted" })
        })
        .catch(error => next(error))
}