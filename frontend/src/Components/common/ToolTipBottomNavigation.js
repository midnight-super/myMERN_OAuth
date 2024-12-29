import CancleButton from "../../assets/icons/close.png";
import SendIcon from "../../assets/icons/sendbutton.png";
import NewMessage from "../../assets/icons/newmessage.png";
import MixflowSetting from "../../assets/icons/mixiflowsetting.png";
import ViewWorkspaceIcon from "../../assets/icons/viewingworkspace.png";
import WorkspaceIcon from "../../assets/icons/workspacecreation.png";
import Profile from "../../assets/icons/profile.png";
// import TooltipComponent from "./TooltipComponent";
import TooltipComponent from "./ToolTip/ProfileToolTip";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
// import {} from "react-tooltip";

const BottomNavigation = () => {
  const [currentSelection, setCurrentSelection] = useState("");

  // const [profileShow, setProfileShow] = useState<boolean>(true);

  // const handleProfileShow = () => {
  //   setProfileShow((prev) => !prev);
  // };

  const handleClick = (e) => {
    setCurrentSelection(e.currentTarget.id);
  };

  return (
    <>
      {/* {profileShow && <TooltipComponent />} */}
      <div
        className="fixed bottom-0 w-full min-h-[3rem] mx-auto max-w-[50rem] mb-20
       px-4 sm:px-0"
      >
        <div className="w-full flex flex-col sm:flex sm:flex-row sm:justify-between bg-white rounded-xl pl-4 pr-4 sm:pr-2 py-3 sm:py-1">
          <div className="relative w-full sm:w-1/2 flex items-center justify-between">
            <input
              className="w-full bg-[#F4F4F4] sm:bg-white text-base h-12 rounded-lg focus:outline-none placeholder:text-[#626262] placeholder:font-semibold focus:placeholder:text-[#F4F4F4] sm:focus:placeholder:text-white px-2"
              placeholder="Message Mixi..."
              type="text"
            />
            <div className="absolute right-0 flex items-center">
              <button className="w-[1rem] sm:w-[1rem] mr-2 sm:mr-0">
                <img
                  src={CancleButton}
                  alt=""
                  className="w-[1.2rem] sm:w-[1rem]"
                />
              </button>
              <div className="">
                <button className="flex justify-center items-center sm:px-0 sm:pl-4">
                  <img src={SendIcon} alt="Send" className="w-[1.5rem] mr-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex justify-between mb-2 mt-6 sm:mt-2 sm:py-0 sm:pb-0 px-2 sm:px-0">
            {/* <div className="px-2 hidden sm:flex justify-center items-center ">
              <button className="px-2 sm:px-0 sm:pl-4">
                <img
                  src={SendIcon}
                  alt="Send"
                  className="w-[2rem] sm:w-[5rem]"
                />
              </button>
            </div> */}
            <div className="flex justify-start sm:justify-center items-center w-1/2 sm:w-full border-r border-gray-300 pr-3 sm:pr-0">
              <button
                className="sm:px-0"
                data-tooltip-id="my-tooltip-data-html"
                id="New Message"
                onClick={handleClick}
                // data-tooltip-html={ReactDOMServer.renderToStaticMarkup(
                //   <>
                //     Hello world
                //     {/* <TooltipComponent /> */}
                //   </>
                // )}
              >
                <img
                  src={NewMessage}
                  alt="New Message"
                  className="w-[1.2rem] sm:w-[1.5rem]"
                />
              </button>
              <Tooltip
                id="my-tooltip-data-html"
                isOpen={currentSelection === "New Message"}
                offset={35}
                // variant="light"
                clickable={true}
                // imperativeModeOnly={true}
                opacity={1}
                // disableStyleInjection={true}
                className="custom-tooltip"
                style={{
                  width: "15rem",
                  height: "30rem",
                  opacity: 1,
                  zIndex: 1000,
                  borderRadius: "15px",
                  backgroundColor: "white",
                }}
              >
                <TooltipComponent />
              </Tooltip>
            </div>
            {/* <div className="border-r border-gray-300"></div> */}

            <div className="flex justify-center items-center w-full border-r border-gray-300">
              <button
                className="sm:px-0"
                id="Mixflow setting"
                onClick={handleClick}
              >
                <img
                  src={MixflowSetting}
                  alt="Mixflow setting"
                  className="w-[1.2rem] sm:w-[1.5rem]"
                />
              </button>
            </div>
            {/* <div className="border-r border-gray-300"></div> */}
            <div className="flex justify-center items-center w-full border-r border-gray-300">
              <button
                className="sm:px-0"
                id="View workspaces"
                onClick={handleClick}
              >
                <img
                  src={ViewWorkspaceIcon}
                  alt="View workspaces"
                  className="w-[1.2rem] sm:w-[1.5rem]"
                />
              </button>
            </div>
            {/* <div className="border-r border-gray-300"></div> */}

            <div className="flex justify-center items-center w-full border-r border-gray-300">
              <button className="sm:px-0" id="Workspace" onClick={handleClick}>
                <img
                  src={WorkspaceIcon}
                  alt="Workspace"
                  className="w-[1.1rem] sm:w-[1.4rem]"
                />
              </button>
            </div>
            {/* <div className="border-r border-gray-300"></div> */}

            <div className="flex justify-end sm:justify-center items-center w-1/2 sm:w-full pl-3 sm:pl-0">
              <button className="sm:px-0" id="Profile" onClick={handleClick}>
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-[1.2rem] sm:w-[1.5rem]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
