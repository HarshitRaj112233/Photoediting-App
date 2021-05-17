// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import { Slider } from "./Slider";

function App() {
  // const Click = (number) => {
  //   setselectedoption(number);
  // };
  const handleChange = (e) => {
    setoptions((prevoption) => {
      return prevoption.map((option, index) => {
        if (index !== selectedoptionIndex) return option;
        return { ...option, value: e.target.value };
      });
    });
  };
  const getImage = () => {
    const filters = options.map((option, index) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(" ") };
  };
  const Default_option = [
    {
      name: "Brightness",
      property: "brightness",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Contrast",
      property: "contrast",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Saturation",
      property: "saturate",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Gray-Scale",
      property: "grayscale",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Sepia",
      property: "sepia",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Hue-Rotate",
      property: "hue-rotate",
      value: 0,
      range: {
        min: 0,
        max: 360,
      },
      unit: "deg",
    },
    {
      name: "Blur",
      property: "blur",
      value: 0,
      range: {
        min: 0,
        max: 30,
      },
      unit: "px",
    },
  ];
  const [options, setoptions] = useState(Default_option);
  const [selectedoptionIndex, setselectedoptionIndex] = useState(0);
  const selectedOption = options[selectedoptionIndex];
  return (
    <div className="container">
      <div className="main-image" style={getImage()}></div>
      <div className="sidebar">
        {options.map((element, index) => {
          return (
            <Sidebar
              property={element}
              key={index}
              active={element === selectedOption}
              click={() => {
                setselectedoptionIndex(index);
              }}
            // click={() => Click(index)}
            />
          );
        })}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handle={handleChange}
      />
    </div>
  );
}

export default App;
