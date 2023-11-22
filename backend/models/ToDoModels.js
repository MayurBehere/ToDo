const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
    toDo: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("ToDo", ToDoSchema);