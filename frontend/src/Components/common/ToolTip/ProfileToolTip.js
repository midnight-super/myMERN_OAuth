// import { current } from "@reduxjs/toolkit";
import Subscription from "../../../assets/icons/subscription.png";
import Notification from "../../../assets/icons/notification2.png";
import WhilteProfile from "../../../assets/icons/whiteprofile.png";
const ProfileToolTip = () => {
  return (
    <>
      <div className={`w-full h-full flex flex-col items-stretch gap-y-4`}>
        <h2 className="text-xl font-semibold text-gray-800 mt-2">
          Profile setting
        </h2>
        <hr className="w-full border-1 border-gray-300" />
        <div className="flex flex-col h-full justify-between gap-y-4 sm:gap-y-2 pb-2">
          <button className="w-full h-full bg-[#2E7DF6] text-white rounded-xl px-4 py-6 flex flex-col items-center justify-center hover:bg-[#0062FF] transition-colors">
            <img
              src={Subscription}
              alt="Mixflow Setting"
              className="w-[2rem] mt-4"
            />
            <span className="font-medium mt-2 text-[1.2rem] sm:text-[1rem]">
              Manage subscription
            </span>
          </button>
          <button className="w-full h-full bg-[#6C757D] text-white rounded-xl px-4 py-6 flex flex-col items-center justify-center hover:bg-gray-600 transition-colors">
            <img
              src={Notification}
              alt="Mixflow Setting"
              className="w-[2rem] mt-2"
            />

            <span className="font-medium mt-2 text-[1.2rem] sm:text-[1rem]">
              Apps Notifications
            </span>
          </button>
          <button className="w-full h-full bg-[#2C3E50] text-white rounded-xl px-4 py-6 flex flex-col items-center justify-center hover:bg-gray-800 transition-colors">
            <img
              src={WhilteProfile}
              alt="Mixflow Setting"
              className="w-[2rem] mt-2"
            />
            <span className="font-medium mt-2 text-[1.2rem] sm:text-[1rem]">
              Basic profile info
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileToolTip;
