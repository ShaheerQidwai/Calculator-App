import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./style.module.css";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  let Bvals = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "/",
    "0",
    "=",
  ];

  const [inp, setinp] = useState("");

  const onpaint = (event) => {
    let val = event.target.value;
    if (val === "C") {
      setinp("");
    } else if (val === "=") {
      let cal = eval(inp);
      setinp("=" + cal);
    } else {
      setinp(inp + event.target.value);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <center>
          <input
            className={styles.display}
            type="text"
            name=""
            id=""
            value={inp}
            placeholder="Enter here"
          />
          <Buttons Bval={Bvals} paint={onpaint}></Buttons>
        </center>
      </div>
    </>
  );
}

export default App;
