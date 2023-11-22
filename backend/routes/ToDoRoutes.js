const Router = require("express");
const { getToDos, saveToDos , updateToDos , deleteToDos } = require("../controller/ToDoController");

const router = Router();
router.get("/get", getToDos);
router.post("/save", saveToDos);
router.put("/update/:id", updateToDos);
router.delete("/delete/:id", deleteToDos);

module.exports = router;
