'use client';
import { useState } from "react";
import Button from "../button/Button";

interface ReadMoreProps {
  id: string;
  text: string;
  amountOfWords?: number;
  paraClassName ?: string; 
}

const ReadMore = ({ id, text, amountOfWords = 36, paraClassName="" }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const splittedText = text.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  const handleKeyboard = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <p id={id}>
      {beginText}
      {itCanOverflow && (
        <div className="flex-col">
          {/* {!isExpanded && <span>... </span>} */}
          <p
            className={`${!isExpanded && "hidden"}`}
            aria-hidden={!isExpanded}
          >
            {endText}
          </p>
          <Button
            className="btn-round max-w-44 text-xs lg:text-base py-3 border-primary-blue mt-4"
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        </div>
      )}
    </p>
  );
};

export default ReadMore;
