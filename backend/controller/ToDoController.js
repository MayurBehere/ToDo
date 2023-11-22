const ToDoModel = require("../models/ToDoModels");

module.exports.getToDos = async (req, res) => {
  // Retrieve all ToDo items from the database
  const toDos = await ToDoModel.find();
  // Send the ToDo items as a response
  res.send(toDos);
};

module.exports.saveToDos = (req, res) => {
  // Extract the 'toDO' property from the request body
  const { toDo } = req.body;
  // Create a new ToDo item in the database
  ToDoModel.create({ toDo })
    .then((data) => {
      // Log a success message to the console
      console.log("Saved Successfully...");
      // Send the created ToDo item as a response with a status code of 201 (Created)
      res.status(201).send(data);
    })
    .catch((err) => {
        console.log(err);
        res.send({ error: err, message: "error while Adding data" });
    });};



// Update a ToDo item in the database
module.exports.updateToDos = (req, res) => {
  const { toDo } = req.body;
  const { id } = req.params;
  ToDoModel.findByIdAndUpdate(id, { toDo })
    .then(() => {
      res.send("data updated successfully");
    })
    .catch((err) => {
        console.log(err);
        res.send({ error: err, message: "error while Updating data" });
    });};




// Delete a ToDo item from the database
module.exports.deleteToDos = (req, res) => {
    const { id } = req.params;
    ToDoModel.findByIdAndDelete(id)
        .then(() => {
            res.send("data deleted successfully");
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, message: "error while deleting data" });
        });
};