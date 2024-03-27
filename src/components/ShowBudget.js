import React, { useContext } from "react";
import { Context } from "../App";
import "./ShowBudget.css";

// const ShowBudget = ({expnc}) => {
const ShowBudget = () => {

  const { expnc,setExpnc } = useContext(Context);

  const handleDelete = (index) => {
    const updatedExpnc = [...expnc];
    updatedExpnc.splice(index, 1);
    setExpnc(updatedExpnc);
  };
  return (
    <div className="show_sec">
    <h1>Show Budget</h1>
    {expnc.length === 0 ? (
      <h2 className="dataa">Add Data To List . . . . .</h2>
    ) : (
      expnc.map((item, index) => (
        <div className="inner_show_sec" key={index}>
          <div className="span_sec">
            <span>Title: {item.title}</span>
            <span>Price: {item.price}</span>
          </div>
        
          <button onClick={() => handleDelete(index)}>x</button>
        </div>
      ))
    )}
  </div>
  );
};

export default ShowBudget;
