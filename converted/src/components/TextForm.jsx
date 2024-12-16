import { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("Copy Text");

  const handleTextChange = (event) => setText(event.target.value);

  const handleTransformation = (type) => {
    if (text) {
      const updatedText =
        type === "upper" ? text.toUpperCase() : text.toLowerCase();
      setText(updatedText);
      const message =
        type === "upper" ? "Uppercase Success" : "Lowercase Success";
      props.showAlert(message, "success");
    }
  };

  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      setButtonText("Copied Text");
      setTimeout(() => setButtonText("Copy Text"), 2000);
      props.showAlert("Copied Text", "success");
    }
    // let copiedText = document.getElementById("textInputBox");
    // copiedText.select();
    // copiedText.setSelectionRange(0,9999); //for mobile devices
    // navigator.clipboard.writeText(copiedText.value)
  };

  const removeSpace = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("UpperCase Success", "success");
    console.log("remove space")
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const readingTime = wordCount * 0.008;

  return (
    <>
      <div className="my-3">
        <h1 className="my-2">{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="textInputBox" className="form-label">
            Coversion
          </label>
          <textarea
            className="form-control"
            style={{
              color: props.mode === "light" ? "#000" : "#fff",
              backgroundColor: props.mode === "light" ? "#fff" : "#2b2f32",
            }}
            id="textInputBox"
            rows="3"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text here"
          />
        </div>
        <button className="btn btn-primary  m-2" onClick={() => setText("")}>
          Clear
        </button>
        <button
          className="btn btn-primary m-2 "
          onClick={() => handleTransformation("upper")}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary  m-2"
          onClick={() => handleTransformation("lower")}
        >
          Convert to Lowercase
        </button>
        <button className="btn btn-primary  m-2" onClick={handleCopy}>
          {buttonText}
        </button>
        <button className="btn btn-primary m-2" onClick={removeSpace}>
          Remove Space
        </button>
      </div>
      <div className="container mt-4">
        <h1>Your text Summmary</h1>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>{readingTime.toFixed(2)} Minutes to read</p>
      </div>
      <div className="container mt-4">
        <h1>Preview</h1>
        <p>{text || "Nothing to preview"}</p>
      </div>
    </>
  );
};

export default TextForm;
