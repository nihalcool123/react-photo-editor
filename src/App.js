import React from "react";
import Slider from "./Slider"
import "./style.css";

export default function App() {
  return (
    <div className="container" >
    <div className="main-image">Image</div>
    <div className="sidebar" >
    Sidebar
    </div>

    <Slider />
      
    </div>
  );
}
