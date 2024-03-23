const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: String,
    branch: String,
    rollno: Number,
    Gender: String
})

const Student = mongoose.model("Student",studentSchema);
module.exports = Student;