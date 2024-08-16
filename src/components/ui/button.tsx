import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  ariaLabel?: string;
}

const Button = ({
  onClick,
  className = "",
  children,
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
