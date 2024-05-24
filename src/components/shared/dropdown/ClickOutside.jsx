import React, { useEffect } from "react";

const ClickOutside = React.forwardRef(({ onClickOutside },ref) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);

  return null;
});

export default ClickOutside;
