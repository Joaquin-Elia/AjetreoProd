import React, { useState } from "react";
import SliderContent from './SliderContent'
import {SliderImage} from '../../../../hooks/useSlider'
import Dots from "./Dots";
import './Slider.css';

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataSlider, loading] = SliderImage()

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} dataSlider={dataSlider} loading={loading}/>
      <Dots
        activeIndex={activeIndex}
        dataSlider={dataSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;