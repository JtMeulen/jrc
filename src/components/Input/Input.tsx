import React, { useState, useEffect, HTMLInputTypeAttribute } from "react";
import cn from "classnames";
import "./Input.scss";

export interface InputProps {
  name: string;
  type: HTMLInputTypeAttribute; // This is making it set an object?
  label?: string;
  placeholder?: string;
  value?: string;
}

const Input = ({ label, placeholder, type, name, value = "" }: InputProps) => {
  const [_value, setValue] = useState(value);

  useEffect(() => {
    console.log("value", _value);
  }, [_value]);

  return (
    <>
      {label && (
        <label id={`${"TODO:RANDOM"}-label`} className="label">
          {label}
        </label>
      )}
      <input
        data-testid="jrc-input"
        className={cn("input")}
        placeholder={placeholder}
        type={type}
        name={name}
        labelled-by={`${"TODO:RANDOM"}-label`} // UseRef good for this?
        value={_value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </>
  );
};

export default Input;
