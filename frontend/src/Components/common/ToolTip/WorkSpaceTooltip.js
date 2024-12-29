import InputGroup from "../InputGroup";
import { Check, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const WorkSpaceToolTip = () => {
  // const currentWorkspace = useMemo(() => {
  //   return workspace.currentWorkspace;
  // }, [workspace.currentWorkspace]);
  // console.log("workspace.workspaces", workspace.workspaces);
  // console.log("currentWorkspace", currentWorkspace);
  // const [workspaceName, setWorkspaceName] = useState("");

  const handleCreateWorkspace = () => {};

  return (
    <>
      <div className="w-full h-full flex flex-1 items-stretch gap-y-4 pt-4">
        {/* {workspace.workspaces.length > 0 ? (
          <div className="px-2 flex flex-col gap-y-4">
            <div className="flex flex-row justify-between items-center gap-x-4">
              <h2 className="text-xl font-semibold text-[#525252] ">
                {currentWorkspace?.name}
              </h2>
              <div className="relative w-auto p-0">
                <Search className="w-2 sm:w-4 sm:h-6 absolute top-[1rem] left-4 -translate-y-1/2 text-[#A5A5A5]" />
                <input
                  type="search"
                  placeholder="Search apps..."
                  className=" w-full bg-[#F2F2F2] rounded-full py-1  pl-10 inline-block ml-auto text-[#525252] placeholder:text-[#A5A5A5] placeholder:text-xs"
                />
              </div>
            </div>
            <hr className="border-1 px-2 mx-auto w-11/12" />

            <div className="relative w-full h-full flex flex-col gap-y-4">
              <div className="w-full h-[16rem] flex flex-col justify-center items-center  overflow-auto mb-4 workspace-scrollbar"></div>
              <div className="absolute bottom-0 w-full my-4">
                <button
                  onClick={handleCreateWorkspace}
                  className="w-full bg-[#2E7DF6] hover:bg-blue-600 text-white font-medium py-1 rounded-full transition duration-300 ease-in-out"
                >
                  <Check className="w-5 mx-auto" />
                </button>
                <hr className="w-11/12 border-1 my-3 mx-auto" />
                <button
                  onClick={() => {}}
                  className="w-full bg-[#F5F5F5] hover:bg-[#A5A5A5] text-black font-medium py-1 rounded-full transition duration-300 ease-in-out flex justify-center gap-x-2 "
                >
                  <X className="w-4" /> Close workspace
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-1 sm:justify-center items-center space-y-2 px-4 sm:px-2">
            <div className="w-full">
              <div className="text-left">
                <h1 className="text-[1.5rem] sm:text-[1.2rem] font-bold text-[#525252] mb-2 tracking-tight">
                  Mixiflow
                </h1>
                <h2 className="text-[1.5rem] sm:text-[1.7rem] font-semibold text-[#525252] mb-8 leading-tight">
                  Create your
                  <br />
                  Workspace
                </h2>
              </div>
              <div className="gap-y-6">
                <InputGroup
                  type="text"
                  placeholder="Name your workspace..."
                  value={workspaceName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setWorkspaceName(e.target.value)
                  }
                  className="w-full px-4 py-4 sm:py-2 rounded-lg bg-gray-100 text-gray-800  placeholder-gray-500 placeholder:text-sm sm:placeholder:text-xs"
                  name="workspaceName"
                  error={undefined}
                />
                <div className="w-full flex justify-center mt-12">
                  <button
                    onClick={handleCreateWorkspace}
                    className="w-full bg-[#2E7DF6] hover:bg-blue-600 text-white font-medium py-2 sm:py-1 rounded-full transition duration-300 ease-in-out"
                  >
                    <Check className="w-5 mx-auto" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default WorkSpaceToolTip;
