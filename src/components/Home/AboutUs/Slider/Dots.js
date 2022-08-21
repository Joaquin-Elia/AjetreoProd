import React from "react";

function Dots({ activeIndex, onclick, dataSlider}) {
  return (
    <div className="all-dots">
      {dataSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        >
          {slide.image}
        </span>
      ))}
    </div>
  );
}

export default Dots;