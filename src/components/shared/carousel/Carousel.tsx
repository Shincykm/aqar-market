"use client";
import React, { useState } from "react";

const Carousel: any = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const handlePrev = () => {
  //   setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="indicators-carousel"
      className="relative w-full z-[800]"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative w-full h-56 overflow-hidden rounded-lg md:h-64">
        {images.length > 0 ? (
          images?.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`absolute block w-full h-full transition-transform duration-700 ease-in-out ${
                index === activeIndex ? "block" : "hidden"
              }`}
              data-carousel-item={index === activeIndex ? "active" : undefined}
            >
              <img
                src={
                  item?.virtual_path
                }
                className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`${item.alt_attribute}`}
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <img
            src={"/images/properties/no_image.jpg"}
            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={"image missing"}
            loading="lazy"
          />
        )}

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {images?.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2 h-2 rounded-full ${
                index === activeIndex ? "bg-white" : "bg-white bg-opacity-35"
              }`}
              aria-current={index === activeIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleIndicatorClick(index)}
              data-carousel-slide-to={index}
            />
          ))}
        </div>
      </div>

      {/* <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white/80 group-focus:ring-1 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-3 h-3 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white/80 group-focus:ring-1 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-3 h-3 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button> */}
    </div>
  );
};

export default Carousel;
