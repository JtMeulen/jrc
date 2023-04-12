import React, { useState, useEffect, HTMLInputTypeAttribute } from "react";
import cn from "classnames";
import "./Input.scss";

export interface InputProps {
  name: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
}

// TODO: add custom validator

const Input = ({
  label,
  placeholder,
  type,
  name,
  value = "",
  required = false,
  disabled = false,
}: InputProps) => {
  const [_value, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

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
        labelled-by={label && `${"TODO:RANDOM"}-label`} //TODO: UseRef good for this?
        value={_value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        disabled={disabled}
      ></input>
    </>
  );
};

export default Input;
