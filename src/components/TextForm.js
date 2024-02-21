import React, { useState } from "react";

const TextForm = (props) => {
  const btnUpClick = () => {
    // console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const btnSentenceClick = () => {
    let Sent = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    setText(Sent);
  }

  const btnDownClick = () => {
    let LowText = text.toLowerCase();
    setText(LowText);
  };

  const btnClearClick = () => {
    let ClearText = " ";
    setText(ClearText);
  }

  const btnTitleClick = () => {
    //  let TitalCase = text.toLowerCase().split(' ').map()
    let TitelCase = text.slice(0).toLowerCase() + text.substr(1).toLocaleLowerCase();
    setText(TitelCase);
  }

  const btnOnChange = (event) => {
    //    console.log("btn on Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="fromgrop">
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={btnOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn mx-3 mt-3 btn-primary" onClick={btnSentenceClick}>
            Sentence Case{" "}
          </button>
          <button className="btn mx-3 mt-3  btn-primary" onClick={btnUpClick}>
            Convert to Uppercase{" "}
          </button>
          <button className="btn mx-3 mt-3   btn-primary" onClick={btnDownClick}>
            Convert to Lowercase{" "}
          </button>
          <button className="btn mx-3 mt-4  btn-primary" onClick={btnClearClick}>
            Clear Text{" "}
          </button>
          <button className="btn mx-3 mt-3   btn-primary" onClick={btnTitleClick}>
            Title Case{" "}
          </button>
        </div>
        <div className="container my-3">
          <h1 className="mt-3 ">Your text summary</h1>
          <div className="input-group">
            <span className="input-group-text mt-3  border-4">Number OF Words</span>
            <span className="input-group-text mx-2 mt-3  text-primary border-4">
              {text.split(" ").length}
            </span>
            <span className="input-group-text mt-3 mt-3 border-4 ">
              Number OF Characters
            </span>
            <span className="input-group-text mt-3  mx-2 text-primary  border-4">
              {text.length}
            </span>
            {/* <div className="input-group my-3 "> */}
            <span className="input-group-text mt-3  border-4">Minutes read</span>
            <span className="input-group-text mt-3 text-primary border-4 mx-2">
              {0.008 * text.split(" ").length}
            </span>
            {/* </div> */}
          </div>

          <h2 className="mt-3">Preview</h2>
          <p>{text}</p>
        </div>
      </div>
     
    </>
  );
};

export default TextForm;
