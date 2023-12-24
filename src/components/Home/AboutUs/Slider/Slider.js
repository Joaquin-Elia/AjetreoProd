import React, { useState } from "react";
import SliderContent from './SliderContent'
import {SliderImage} from '../../../../hooks/useSlider'
import Dots from "./Dots";
import './Slider.css';

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataSlider, loading] = SliderImage();

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} dataSlider={dataSlider} loading={loading}/>
      {/* <button onClick={() => setActiveIndex(activeIndex === 0 ? dataSlider.length -1 : activeIndex -1)} style={{position: 'absolute', top: 0, color: 'lightgreen'}}>PREV BTN</button>
      <button onClick={() => setActiveIndex(activeIndex === dataSlider.length -1 ? 0 : activeIndex +1)} style={{position: 'absolute', top: 0, right: 0, color: 'lightgreen'}}>NEXT BTN</button> */}
      <Dots
        activeIndex={activeIndex}
        dataSlider={dataSlider}
        onclick={activeIndex => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;