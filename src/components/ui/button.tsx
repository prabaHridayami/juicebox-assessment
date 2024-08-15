import React from "react";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  ariaLabel?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  children,
  disabled = false,
  type = "button",
  loading = false,
  ...rests
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      type={type}
      {...rests}
    >
      {loading ? (
        <span className="spinner" role="status" aria-hidden="true"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
