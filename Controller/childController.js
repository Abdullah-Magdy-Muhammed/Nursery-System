const { response } = require("express");

exports.getAllChild = (request, response) => {
    response.status(200).json({ message: "Fetch all Childrens" });
}
exports.addChild = (request, response) => {
    response.status(201).json({ message: "Add Childrens" });
}
exports.updateChild = (request, response) => {
    response.status(200).json({ message: "Update Childrens" });
}
exports.deleteChild = (request, response) => {
    response.status(200).json({ message: "Delete Childrens" });
}
exports.getChildByID = (request, response, next) => {

    response.status(200).json({ data: request.params.id })

}
exports.deleteChildByID = (request, response, next) => {

    response.status(200).json({ deletedChildData: request.params.id })
}