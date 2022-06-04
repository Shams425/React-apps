import React from "react";
import "./boxExamples.css";

export default function BoxExamples() {
  const copyHandler = (e) => {
    navigator.clipboard.writeText(
      `box-shadow: ${window.getComputedStyle(e.target).boxShadow}`
    );
  };
  return (
    <div className="examplesWrapper mt-5">
      <h2>Box Shadow Examples :</h2>
      <div className="Boxcontainer">
        <div className="row">
          <div className="example box-1" onClick={copyHandler}>
            #01
          </div>
          <div className="example box-2" onClick={copyHandler}>
            #02
          </div>
          <div className="example box-3" onClick={copyHandler}>
            #03
          </div>
          <div className="example box-4" onClick={copyHandler}>
            #04
          </div>
          <div className="example box-5" onClick={copyHandler}>
            #05
          </div>
          <div className="example box-6" onClick={copyHandler}>
            #06
          </div>
          <div className="example box-7" onClick={copyHandler}>
            #07
          </div>
          <div className="example box-8" onClick={copyHandler}>
            #08
          </div>
        </div>
      </div>
    </div>
  );
}
