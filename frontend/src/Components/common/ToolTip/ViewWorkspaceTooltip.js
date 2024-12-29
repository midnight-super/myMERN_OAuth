// import { current } from "@reduxjs/toolkit";
// import Subscription from "../../assets/icons/subscription.png";
// import Notification from "../../assets/icons/notification2.png";
// import WhilteProfile from "../../assets/icons/whiteprofile.png";
// import { useSelector } from "react-redux";
import { Search } from "lucide-react";
const ViewWorkspaceTooltip = () => {
  // const workspace = useSelector((state) => state.workspace);

  return (
    <>
      <div className="w-full h-full flex flex-col items-stretch gap-y-3">
        <h2 className="text-xl font-semibold text-gray-800 mt-2">Workspaces</h2>
        <hr className="w-full border-1 border-gray-300" />
        <div className="relative w-auto p-0">
          <Search className="w-6 sm:w-4 absolute top-[1.1rem] sm:top-[1rem] left-4 -translate-y-1/2 text-[#A5A5A5]" />
          <input
            type="search"
            placeholder="Search apps..."
            className="w-full bg-[#F2F2F2] rounded-full py-2 sm:py-1 pl-12 sm:pl-10 inline-block ml-auto text-[#525252] placeholder:text-[#A5A5A5] placeholder:text-base sm:placeholder:text-xs"
          />
        </div>
        {/* {workspace.workspaces.length > 0 && (
          <div className="flex flex-col justify-center items-center space-y-2 gap-y-2">
            {workspace.workspaces.map((workspace, index) => (
              <div
                key={index}
                className="w-full h-[7rem] flex flex-col bg-[#F4F4F4] rounded-lg text-[#404040] py-2 px-3"
              >
                <div className="w-full">{workspace.name}</div>

                <div className="w-full mt-3">
                  <span className="text-[0.7rem] text-[#A5A5A5]">
                    5 Apps in this workspace
                  </span>
                  <hr className="w-3/4 border-1 border-gray-300" />
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </>
  );
};

export default ViewWorkspaceTooltip;
