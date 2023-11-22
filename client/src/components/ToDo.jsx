import React from "react";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant"; 

const ToDo = ({ text, id, setUpdateUI }) => {
  const deleteToDo = () => {
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prev) => !prev);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <div onClick={deleteToDo}>
          <RxCross1 className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
