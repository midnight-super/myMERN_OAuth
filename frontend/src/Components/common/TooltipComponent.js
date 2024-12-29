const TooltipComponent = () => {
  return (
    <div
      className="h-full w-full fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity sm:px-0 px-4"
      id="tooltip"
    >
      <div className="">
        <div className="relative w-64 bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Profile setting
            </h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-500 text-white rounded-xl p-4 flex items-center justify-between hover:bg-blue-600 transition-colors">
                <span className="font-medium">Manage subscription</span>
                {/* <MousePointer2 className="h-6 w-6" /> */}
              </button>
              <button className="w-full bg-gray-500 text-white rounded-xl p-4 flex items-center justify-between hover:bg-gray-600 transition-colors">
                <span className="font-medium">Apps Notifications</span>
                <div className="relative">
                  {/* <Bell className="h-6 w-6" /> */}
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" />
                </div>
              </button>
              <button className="w-full bg-gray-700 text-white rounded-xl p-4 flex items-center justify-between hover:bg-gray-800 transition-colors">
                <span className="font-medium">Basic profile info</span>
                {/* <User className="h-6 w-6" /> */}
              </button>
            </div>
          </div>
          <div className="absolute -bottom-3 right-6 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-white"></div>
        </div>
      </div>
    </div>
  );
};

export default TooltipComponent;
