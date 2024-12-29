import ProfileToolTip from "./ToolTip/ProfileToolTip";
import WorkSpaceToolTip from "./ToolTip/WorkSpaceTooltip";
import ViewWorkspaceTooltip from "./ToolTip/ViewWorkspaceTooltip";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import MixiSettingTooltip from "./ToolTip/MixiSettingTooltip";
import React from "react";

const BottomNavigation = () => {
  const [tooltipOffset, setTooltipOffset] = useState(35);
  const [currentSelection, setCurrentSelection] = useState({
    newmessage: false,
    mixflowsetting: false,
    viewworkspace: false,
    workspace: false,
    profile: false,
  });

  // const handleProfileShow = () => {
  //   setProfileShow((prev) => !prev);
  // };

  const handleClick = (e) => {
    const resetState = {
      newmessage: false,
      mixflowsetting: false,
      viewworkspace: false,
      workspace: false,
      profile: false,
    };
    setCurrentSelection({
      ...resetState,
      [e.currentTarget.id]: !currentSelection[e.currentTarget.id],
    });
    console.log({
      ...resetState,
      [e.currentTarget.id]: !currentSelection[e.currentTarget.id],
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const handleMediaQueryChange = (e) => {
      setTooltipOffset(e.matches ? 10 : 35);
    };

    // Set initial value
    setTooltipOffset(mediaQuery.matches ? 10 : 35);

    // Add listener for changes
    mediaQuery.addListener(handleMediaQueryChange);

    // Cleanup
    return () => mediaQuery.removeListener(handleMediaQueryChange);
  }, []);

  return (
    <>
      <div className="fixed bottom-0 w-full min-h-[3rem] mx-auto max-w-[50rem] mb-4 px-4 sm:px-0">
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
                  src={"../../assets/icons/close.png"}
                  alt=""
                  className="w-[1.2rem] sm:w-[1rem]"
                />
              </button>
              <div className="">
                <button className="flex justify-center items-center sm:px-0 sm:pl-4">
                  <img
                    src={"../../assets/icons/sendbutton.png"}
                    alt="Send"
                    className="w-[1.5rem] mr-2"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex justify-between mb-2 mt-6 sm:mt-2 sm:py-0 sm:pb-0 px-2 sm:px-0">
            <div className="flex justify-start sm:justify-center items-center w-1/2 sm:w-full border-r border-gray-300 pr-3 sm:pr-0">
              <button className="sm:px-0" id="newmessage" onClick={handleClick}>
                <img
                  src={"../../assets/icons/newmessage.png"}
                  alt="New Message"
                  className="w-[1.2rem] sm:w-[1.5rem]"
                />
              </button>
            </div>

            <div className="flex justify-center items-center w-full border-r border-gray-300">
              <button
                className="sm:px-0"
                id="mixflowsetting"
                onClick={handleClick}
                data-tooltip-id="mixiflowsetting-tooltip-data-html"
              >
                <img
                  src={"../../assets/icons/mixiflowsetting.png"}
                  alt="Mixflow setting"
                  className="w-[1.2rem] sm:w-[1.5rem]"
                />
              </button>
              {currentSelection.mixflowsetting && (
                <Tooltip
                  id="mixiflowsetting-tooltip-data-html"
                  offset={tooltipOffset}
                  clickable={true}
                  opacity={1}
                  disableStyleInjection={true}
                  className="custom-tooltip w-[calc(100vw-2rem)] sm:w-[15rem] h-[90vh] sm:h-[30rem] translate-x-[1rem] sm:translate-x-0"
                  style={{
                    zIndex: 1000,
                    borderRadius: "15px",
                    backgroundColor: "white",
                  }}
                  isOpen={currentSelection.mixflowsetting}
                >
                  <MixiSettingTooltip />
                </Tooltip>
              )}
            </div>
            <div className="flex justify-center items-center w-full border-r border-gray-300">
              <button
                className="sm:px-0"
                id="viewworkspace"
                onClick={handleClick}
                data-tooltip-id="viewworkspace-tooltip-data-html"
              >
                <img
                  src={"../../assets/icons/viewingworkspace.png"}
                  alt="View workspaces"
                  className="w-[1.2rem] sm:w-[1.5rem]"
                />
              </button>
              {currentSelection.viewworkspace && (
                <Tooltip
                  id="viewworkspace-tooltip-data-html"
                  offset={tooltipOffset}
                  clickable={true}
                  opacity={1}
                  disableStyleInjection={true}
                  className="custom-tooltip w-[calc(100vw-2rem)] sm:w-[15rem] h-[90vh] sm:h-[30rem] translate-x-[1rem] sm:translate-x-0"
                  style={{
                    zIndex: 1000,
                    borderRadius: "15px",
                    backgroundColor: "white",
                  }}
                  isOpen={currentSelection.viewworkspace}
                >
                  <ViewWorkspaceTooltip />
                </Tooltip>
              )}
            </div>

            <div className="flex justify-center items-center w-full border-r border-gray-300">
              <button
                className="sm:px-0"
                id="workspace"
                onClick={handleClick}
                data-tooltip-id="workspace-tooltip-data-html"
              >
                <img
                  src={"../../assets/icons/workspacecreation.png"}
                  alt="Workspace"
                  className="w-[1.1rem] sm:w-[1.4rem]"
                />
              </button>
              {currentSelection.workspace && (
                <Tooltip
                  id="workspace-tooltip-data-html"
                  isOpen={currentSelection.workspace}
                  offset={tooltipOffset}
                  clickable={true}
                  opacity={1}
                  disableStyleInjection={true}
                  className="custom-tooltip w-[calc(100vw-2rem)] sm:w-[15rem] h-[90vh] sm:h-[30rem] translate-x-[1rem] sm:translate-x-0"
                  style={{
                    zIndex: 1000,
                    borderRadius: "15px",
                    backgroundColor: "white",
                  }}
                >
                  <WorkSpaceToolTip />
                </Tooltip>
              )}
            </div>

            <div className="flex justify-end sm:justify-center items-center w-1/2 sm:w-full pl-3 sm:pl-0">
              <button
                className="sm:px-0"
                data-tooltip-id="profile-tooltip-data-html"
                id="profile"
                onClick={handleClick}
              >
                <img
                  src={"../../assets/icons/profile.png"}
                  alt="Profile"
                  className="w-[1.2rem] sm:w-[1.5rem]"
                />
              </button>
              {currentSelection.profile && (
                <Tooltip
                  id="profile-tooltip-data-html"
                  isOpen={currentSelection.profile}
                  offset={tooltipOffset}
                  clickable={true}
                  opacity={1}
                  disableStyleInjection={true}
                  className="custom-tooltip w-[calc(100vw-2rem)] sm:w-[15rem] h-[90vh] sm:h-[30rem] translate-x-[1rem] sm:translate-x-0"
                  style={{
                    zIndex: 1000,
                    borderRadius: "15px",
                    backgroundColor: "white",
                  }}
                >
                  <ProfileToolTip />
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
