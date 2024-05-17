// import { ReactNode } from "react";

// type ButtonProps = {
//   children: ReactNode;
//   onClick?: () => void;
// }

// const Button = ({ children, onClick, ...props} : ButtonProps) => {
//   return (
//     <button onClick={onClick} {...props}>
//         {children}
//     </button>
//   )
// }

// export default Button

import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick, ...props }) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;