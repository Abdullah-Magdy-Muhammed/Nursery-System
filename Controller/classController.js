const { response } = require("express");

exports.getAllClass = (request, response) => {
    response.status(200).json({ message: "Fetch all Childrens" });
}
exports.addClass = (request, response) => {
    response.status(201).json({ message: "Add Childrens" });
}
exports.updateClass = (request, response) => {
    response.status(200).json({ message: "Update Childrens" });
}
exports.deleteClass = (request, response) => {
    response.status(200).json({ message: "Delete Childrens" });
}
exports.getClassByID = (request, response, next) => {

    response.status(201).json({ data: request.params.id })

}
exports.deleteClassByID = (request, response, next) => {

    response.status(200).json({ deletedClassData: request.params.id })
}
exports.getClassByID = (request, response, next) => {

    response.status(200).json({ data: request.params.id })

}
exports.getClassChildren = (request, response, next) => {

    response.status(200).json({ data: request.params.children })

}
exports.getClassTeacher = (request, response, next) => {

    response.status(200).json({ data: request.params.supervisor })

}