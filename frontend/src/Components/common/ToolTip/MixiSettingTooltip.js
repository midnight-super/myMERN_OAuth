// import { useSelector } from "react-redux";

import { useState } from "react";

// import { RootState } from "../../../store/store";
const MixiSettingTooltip = () => {
  const [memoryActivation, setMemoryActivation] = useState(false);
  const [professional, setProfessional] = useState(false);
  const [casual, setCasual] = useState(false);
  const [movivational, setMovivational] = useState(false);
  const [simplicity, setSimplicity] = useState(false);
  const [short, setShort] = useState(false);
  const [memoryDeletion, setMemoryDeletion] = useState(false);
  const handleMemoryActivation = (value) => {
    setMemoryActivation(value);
  };
  const handleProfessional = (value) => {
    setProfessional(value);
  };
  const handleCasual = (value) => {
    setCasual(value);
  };
  const handleMovivational = (value) => {
    setMovivational(value);
  };
  const handleSimplicity = (value) => {
    setSimplicity(value);
  };
  const handleShort = (value) => {
    setShort(value);
  };

  const handleMemoryDeletion = (value) => {
    setMemoryDeletion(value);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-stretch gap-y-2 text-gray-800 ">
        <h2 className="text-[1.3rem] font-semibold">Mixi Settings</h2>
        <hr className="w-full border-1 border-gray-300" />
        <div className="w-full h-full flex flex-col items-stretch justify-between pb-2">
          <div className="w-full flex flex-col gap-y-2">
            <h1 className="text-[1.2rem] sm:text-[1rem] font-bold tracking-tighter">
              Memory
            </h1>
            <span className="text-[0.8rem] sm:text-[0.55rem] text-[#404040] leading-1">
              When enabled, Mixi can remember user preferences, past
              interactions, and tasks.
            </span>
            <div className="flex w-full justify-between">
              <h1 className="text-[1.1rem] sm:text-[0.8rem] font-semibold tracking-tighter border-r-2 w-[53%]">
                Memory Activation
              </h1>
              <div className="items-end inline w-[43%] space-x-1">
                <button
                  className={`px-4 sm:px-3 text-[0.8rem] sm:text-[0.6rem] border-2 ${
                    memoryActivation
                      ? "border-[#2E7DF6] text-[#2E7DF6]"
                      : "border-black text-black"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleMemoryActivation(true)}
                >
                  Yes
                </button>
                <button
                  className={`px-4 sm:px-3 text-[0.8rem] sm:text-[0.6rem] border-2 ${
                    memoryActivation
                      ? "border-black text-black"
                      : "border-[#2E7DF6] text-[#2E7DF6]"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleMemoryActivation(false)}
                >
                  No
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <h1 className="text-[1.1rem] sm:text-[0.8rem] font-semibold tracking-tighter border-r-2 pr-2 w-[53%] ">
                Memory Deletion
              </h1>
              <div className="inline space-x-2 w-[43%] pl-[0.9rem] sm:pl-2">
                <button
                  className={`px-[0.35rem] sm:px-[0.3rem] border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    memoryDeletion
                      ? "border-[#2E7DF6] text-[#2E7DF6]"
                      : "border-black text-black"
                  } rounded-full`}
                  onClick={() => handleMemoryDeletion(!memoryDeletion)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <h1 className="text-[1.2rem] sm:text-[1rem] font-bold tracking-tighter">
              Personalization
            </h1>
            <span className="text-[0.8rem] sm:text-[0.55rem] text-[#404040]">
              When enabled, Mixi can help to tailor responses and suggestions.
            </span>
            <div className="flex w-full justify-between">
              <h1 className="text-[1.1rem] sm:text-[0.8rem] font-semibold tracking-tighter border-r-2 w-[40%]">
                Professional
              </h1>
              <div className="items-end inline w-[60%] space-x-2 pl-5">
                <button
                  className={`px-4 sm:px-3 border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    professional
                      ? "border-[#2E7DF6] text-[#2E7DF6]"
                      : "border-black text-black"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleProfessional(true)}
                >
                  Yes
                </button>
                <button
                  className={`px-4 sm:px-3 border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    professional
                      ? "border-black text-black"
                      : "border-[#2E7DF6] text-[#2E7DF6]"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleProfessional(false)}
                >
                  No
                </button>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <h1 className="text-[1.1rem] sm:text-[0.8rem] font-semibold tracking-tighter border-r-2 w-[40%]">
                Casual
              </h1>
              <div className="items-end inline w-[60%] space-x-2 pl-5">
                <button
                  className={`px-4 sm:px-3 border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    casual
                      ? "border-[#2E7DF6] text-[#2E7DF6]"
                      : "border-black text-black"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleCasual(true)}
                >
                  Yes
                </button>
                <button
                  className={`px-4 sm:px-3 border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    casual
                      ? "border-black text-black"
                      : "border-[#2E7DF6] text-[#2E7DF6]"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleCasual(false)}
                >
                  No
                </button>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <h1 className="text-[1.1rem] sm:text-[0.8rem] font-semibold tracking-tighter border-r-2 w-[40%]">
                Motivational
              </h1>
              <div className="items-end inline w-[60%] space-x-2 pl-5">
                <button
                  className={`px-4 sm:px-3 border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    movivational
                      ? "border-[#2E7DF6] text-[#2E7DF6]"
                      : "border-black text-black"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleMovivational(true)}
                >
                  Yes
                </button>
                <button
                  className={`px-4 sm:px-3 border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    movivational
                      ? "border-black text-black"
                      : "border-[#2E7DF6] text-[#2E7DF6]"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleMovivational(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <h1 className="text-[1.2rem] sm:text-[1rem] font-bold tracking-tighter">
              Response style
            </h1>
            <span className="text-[0.8rem] sm:text-[0.55rem] text-[#404040] tracking-tight">
              Users can select preferences to avoid complex language, ensuring
              responses are simple and easy to understand.
            </span>
            <div className="flex w-full justify-between">
              <h1 className="text-[1.1rem] sm:text-[0.8rem] font-semibold tracking-tighter border-r-2 w-[40%]">
                Simplicity
              </h1>
              <div className="items-end inline w-[60%] space-x-2 pl-5">
                <button
                  className={`px-4 sm:px-3 border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    simplicity
                      ? "border-[#2E7DF6] text-[#2E7DF6]"
                      : "border-black text-black"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleSimplicity(true)}
                >
                  Yes
                </button>
                <button
                  className={`px-4 sm:px-3 border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    simplicity
                      ? "border-black text-black"
                      : "border-[#2E7DF6] text-[#2E7DF6]"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleSimplicity(false)}
                >
                  No
                </button>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <h1 className="text-[1.1rem] sm:text-[0.8rem] font-semibold tracking-tighter border-r-2 w-[40%]">
                Short (10-15)
              </h1>
              <div className="items-end inline w-[60%] space-x-2 pl-5">
                <button
                  className={`px-4 sm:px-3 border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    short
                      ? "border-[#2E7DF6] text-[#2E7DF6]"
                      : "border-black text-black"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleShort(true)}
                >
                  Yes
                </button>
                <button
                  className={`px-4 sm:px-3 border-2 text-[0.8rem] sm:text-[0.6rem] ${
                    short
                      ? "border-black text-black"
                      : "border-[#2E7DF6] text-[#2E7DF6]"
                  } rounded-full tracking-tighter`}
                  onClick={() => handleShort(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MixiSettingTooltip;
