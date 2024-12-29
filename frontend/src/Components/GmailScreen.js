import { useNavigate } from "react-router-dom";

import BottomNavigation from "../../components/common/BottomNavigation";
import Gmail from "../../assets/icons/home/gmail.png";
import { MoveLeft } from "lucide-react";

const GmailScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#E8E8E8] sm:px-4">
      <div className="w-full flex flex-col max-w-2x rounded-lg">
        {/* <div className="mx-auto">
          <OptionalButton />
        </div> */}
        <div className="flex justify-center mb-8">
          <div className="w-full sm:w-[35rem] rounded-full p-3 sm:p-4">
            <div className="flex flex-row gap-x-3 sm:gap-x-6">
              <div
                className="bg-[#D2D2D2] rounded-full px-2 py-2 w-[5rem] flex justify-center cursor-pointer hover:scale-125 duration-100"
                onClick={() => navigate("/works")}
              >
                <MoveLeft className="w-[2rem] h-[1.5rem] sm:w-[5rem] sm:h-[2rem] " />
              </div>
              <button className="flex justify-center items-center bg-[#D2D2D2] rounded-full pl-4 pr-4 sm:pr-8 py-1 sm:py-2 text-[#707070] text-[0.8rem] sm:text-[1rem] font-semibold ">
                <img
                  src={Gmail}
                  alt=""
                  className="w-[1.2rem] sm:w-[1.8rem] inline-block mr-2"
                />
                Gmail
              </button>
            </div>
            <div className="mt-8 flex flex-col text-[#626262] font-normal text-left text-[0.8rem] sm:text-[1.2rem] gap-y-8">
              <button className="flex items-center justify-start w-full space-x-2 py-2 bg-[#D2D2D2] rounded-full pl-4 hover:scale-[1.05] duration-100">
                <img
                  src={Gmail}
                  alt=""
                  className="w-[1.5rem] sm:w-[1.8rem] mr-1 sm:mr-4"
                />
                <span>Can you send 5 emails?</span>
              </button>
              <button className="flex items-center justify-start w-full space-x-2 py-2 bg-[#D2D2D2] rounded-full pl-4 hover:scale-[1.05] duration-100">
                <img
                  src={Gmail}
                  alt=""
                  className="w-[1.5rem] sm:w-[1.8rem] mr-1 sm:mr-4"
                />
                <span>Show me all unread emails in my Gmail</span>
              </button>
              <button className="flex items-center justify-start w-full space-x-2 py-2 bg-[#D2D2D2] rounded-full pl-4 tracking-tight sm:tracking-normal hover:scale-[1.05] duration-100">
                <img
                  src={Gmail}
                  alt=""
                  className="w-[1.5rem] sm:w-[1.8rem] mr-1 sm:mr-4"
                />
                <span>Show emails from last month with attachments </span>
              </button>
              <button className="flex items-center justify-start w-full space-x-2 py-2 bg-[#D2D2D2] rounded-full pl-4 tracking-tight sm:tracking-normal hover:scale-[1.05] duration-100">
                <img
                  src={Gmail}
                  alt=""
                  className="w-[1.5rem] sm:w-[1.8rem] mr-1 sm:mr-4"
                />
                <span>Show me all unread emails from amazon 2 days ago</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default GmailScreen;
