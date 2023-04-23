import React, {
  useRef,
  useState,
  useEffect,
  HTMLInputTypeAttribute,
} from "react";
import cn from "classnames";
import { uid } from "uid/single";
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
  const randomId = useRef(uid());
  const [_value, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <>
      {label && (
        <label id={`${randomId.current}-label`} className="label">
          {label}
        </label>
      )}
      <input
        data-testid="jrc-input"
        className={cn("input")}
        placeholder={placeholder}
        type={type}
        name={name}
        labelled-by={label && `${randomId.current}-label`}
        value={_value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        disabled={disabled}
      ></input>
    </>
  );
};

export default Input;
