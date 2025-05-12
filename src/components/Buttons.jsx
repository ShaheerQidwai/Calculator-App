import React from "react";
import styles from "./BStyle.module.css";

export default function Buttons({ Bval, paint }) {
  return (
    <div className={styles.btnContainer}>
      {Bval.map((item) => (
        <button
          key={item}
          className={styles.btn}
          type="button"
          value={item}
          onClick={paint}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
