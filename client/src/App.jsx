import React, { useEffect } from "react";
import ToDo from "./components/ToDo";
import axios from "axios";
import { baseURL } from "./utils/constant";
import { useState } from "react";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
        setToDos(res.data); // Update the state with fetched data
      })
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = () => {
    axios
      .post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prev) => !prev);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title"> ToDo App</h1>

        <div className="input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a task..."
          />
          <button  onClick={saveToDo}>
            Add
          </button>
        </div>

        <div className="list">
          {toDos.map((el) => (
            <ToDo key={el._id} text={el.toDo} id={el._id} setUpdateUI={setUpdateUI} />
          ))}
        </div>
      </div>
    
    </main>
  );
};

export default App;
