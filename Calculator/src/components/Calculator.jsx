import { useEffect, useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (value === "=" || value === "Enter") {
      try {
        setInput(eval(input).toString());
        console.log(input);
      } catch {
        setInput("0");
      }
    }
    if (value === "AC") {
      setInput("0");
    }
    if (value === "DE" || value === "Backspace") {
      setInput(input.slice(0, -1) || "0");
    }
    if (!isNaN(value) || "/*-+.".includes(value)) {
      setInput(input === "0" ? value : input + value);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      // console.log(key);
      if (/[0-9/*\+-.]/.test(key) || key === "Enter" || key === "Backspace") {
        handleClick(key);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
    window.removeEventListener("keydown", handleKeyPress);
    }
  },[input]);
  return (
    <div className="p-6 bg-[#1b1725] rounded-lg shadow-xl border-2 border-gray-300">
      <div className="mb-4 border-b-2 border-gray-300">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full text-right text-white text-2xl bg-transparent outline-none py-4"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {["AC", "DE", ".", "/"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="btn-blue"
          >
            {item}
          </button>
        ))}
        {[7, 8, 9].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item.toString())}
            className="btn"
          >
            {item}
          </button>
        ))}
        <button onClick={() => handleClick("*")} className="btn-blue">
          *
        </button>
        {[4, 5, 6].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item.toString())}
            className="btn"
          >
            {item}
          </button>
        ))}
        <button onClick={() => handleClick("-")} className="btn-blue">
          -
        </button>
        {[1, 2, 3].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item.toString())}
            className="btn"
          >
            {item}
          </button>
        ))}
        <button onClick={() => handleClick("+")} className="btn-blue">
          +
        </button>
        <button onClick={() => handleClick("00")} className="btn">
          00
        </button>
        <button onClick={() => handleClick("0")} className="btn">
          0
        </button>
        <button
          onClick={() => handleClick("=")}
          className="col-span-2 btn-blue equal"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
