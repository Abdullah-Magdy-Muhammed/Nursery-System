exports.getAllTeachers = (request, response) => {
    response.status(200).json({ message: "Fetch all Teachers" });
}

exports.addTeacher = (request, response) => {
    response.status(201).json({ message: "Add Teacher" });
}

exports.updateTeacher = (request, response) => {
    response.status(200).json({ message: "Update Teacher" });
}
exports.deleteTeacher = (request, response) => {
    response.status(200).json({ message: "Delete Teacher" });

}
exports.getTeacherByID = (request, response, next) => {

    response.status(201).json({ data: request.params.id })

}
exports.deleteTeacherByID = (request, response, next) => {

    response.status(200).json({ deletedTeacherData: request.params.id })

}