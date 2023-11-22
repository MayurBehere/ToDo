import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const ToDo = ({ text }) => {
  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <AiFillEdit className="icon" />
        <RxCross1 className="icon" />
      </div>
    </div>
  );
};

export default ToDo;
