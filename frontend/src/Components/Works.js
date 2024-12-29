import boonful from "../assets/icons/boonful.png";
import InfoIcon from "../assets/icons/moreinfo.png";
import Gmail from "../assets/icons/home/gmail.png";
import Outlook from "../assets/icons/apps/outlook.png";
import Twitter from "../assets/icons/home/twitter.png";
import GoogleDocs from "../assets/icons/home/googledocs.png";
import Notion from "../assets/icons/home/notion.png";
import Calendly from "../assets/icons/home/Calendly.png";
import OptionalButton from "./common/OptionalButton";
import BottomNavigation from "./common/BottomNavigation";
// import { CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import ToolTipBottomNavigation from "../../components/common/ToolTipBottomNavigation";

import "react-tooltip/dist/react-tooltip.css";

const Works = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    console.log("route==>", route);
    navigate(route);
  };
  return (
    <div className="flex flex-col items-center justify-start bg-[#E8E8E8] sm:px-4 h-screen">
      <div className="w-full flex flex-col max-w-2x rounded-lg px-4">
        <div className="mt-4 sm:mt-[3rem] sm:mx-auto">
          <OptionalButton />
        </div>
        <div className="flex items-center justify-center sm:mb-8 mt-4">
          <div className="w-full sm:w-[45rem] p-2 sm:p-4 h-[70vh] sm:h-auto overflow-y-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 sm:gap-y-8 mb-8 py-6 text-[#626262]">
              <button
                className="flex items-center justify-start space-x-2 py-2 bg-[#D2D2D2] rounded-full pl-4"
                onClick={() => handleClick("/works/gmail")}
              >
                <div className="pl-5 pr-5 pt-2 pb-2 bg-[#FFF] rounded-3xl">
                  <img
                    src={Gmail}
                    alt=""
                    className="w-[0.8rem] sm:w-[1.3rem] "
                  />
                </div>
                <span>Gmail</span>
              </button>
              <button
                className="flex items-center justify-start space-x-2 py-2 bg-[#D2D2D2] rounded-full pl-4"
                onClick={() => handleClick("/works/gmail")}
              >
                <div className="pl-2 pr-2 bg-[#FFF] rounded-3xl">
                  <img
                    src={Outlook}
                    alt=""
                    className="w-[1.8rem] sm:w-[3.3rem] "
                  />
                </div>
                <span>Outlook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
      {/* <ToolTipBottomNavigation /> */}
    </div>
  );
};

export default Works;
