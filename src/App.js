import React, { useState } from "react";
import Slider from "./Slider";
import "./style.css";
import SidebarItem from "./SidebarItem";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  {
    name: "Saturation",
    property: "saturation",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 100,
    range: {
      min: 0,
      max: 360
    },
    unit: "deg"
  },
  {
    name: "Blur",
    property: "blur",
    value: 100,
    range: {
      min: 0,
      max: 20
    },
    unit: "px"
  }
];

export default function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const selectedOption = options[selectedOptionIndex];

  return (
    <div className="container">
      <div className="main-image" />
      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectedOptionIndex(index)}
            />
          );
        })}
      </div>

      <Slider />
    </div>
  );
}
