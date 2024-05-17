import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick, ...props} : ButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
        {children}
    </button>
  )
}

export default Button