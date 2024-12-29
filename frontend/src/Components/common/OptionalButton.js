import React from "react";
import { useState } from "react";
import FullScreen from "../../assets/icons/mixiflow.png";
// import { Fullscreen } from "lucide-react";
const OptionalButton = () => {
  const [selected, setSelected] = useState("Mixiflow");

  const toggleButton = (option) => {
    setSelected(option);
  };

  return (
    <button className="grid grid-cols-2 rounded-full bg-[#D2D2D2] px-1 py-1 text-sm">
      <div
        onClick={() => toggleButton("Mixiflow")}
        className={`flex items-center rounded-full pl-3 sm:pl-2 sm:px-2 sm:py-2 transition-colors tracking-tight ${
          selected === "Mixiflow" ? "bg-white shadow-sm" : ""
        }`}
      >
        <div className="flex items-center">
          <img src={FullScreen} alt="Mixiflow" className={`w-8`} />
          {/* <Fullscreen
          className={`h-4 w-4 font-semibold ${
            selected === "Mixiflow" ? "opacity-100" : "opacity-0"
          }`}
        /> */}
          <span
            className={`font-medium pr-2 ${
              selected === "Mixiflow" ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Mixiflow
          </span>
        </div>
      </div>
      <div
        onClick={() => toggleButton("mAI")}
        className={`flex justify-center items-center h-full rounded-full sm:px-3 sm:py-3 transition-colors text-[1rem] sm:text-[1.2rem] ${
          selected === "mAI" ? "bg-white " : ""
        }`}
      >
        <span
          className={`${
            selected === "mAI" ? "text-gray-900" : "text-gray-500"
          } font-semibold`}
        >
          mAI
        </span>
      </div>
    </button>
  );
};

export default OptionalButton;
