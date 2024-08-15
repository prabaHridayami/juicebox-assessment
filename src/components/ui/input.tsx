import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  append?: React.ReactNode;
}

const Input = ({
  name,
  label,
  className = "",
  inputClassName = "",
  placeholder = "",
  type = "text",
  append,
  ...rest
}: InputProps) => {
  return (
    <div className={`input-container ${className}`}>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`input ${inputClassName}`}
        autoComplete="off"
        {...rest}
      />
      {append && append}
    </div>
  );
};

export default Input;
