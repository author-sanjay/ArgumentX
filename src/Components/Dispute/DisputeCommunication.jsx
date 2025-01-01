/* eslint-disable react/prop-types */


function DisputeCommunication({mockMessages}) {
  return (
    <div className="bg-base-100 mt-5 py-5 px-5  rounded-lg shadow-lg">
    <h2 className="font-bold mb-3">Communication</h2>
    <div className="flex flex-col space-y-2 overflow-scroll h-[90%] noScrollbar mb-5">
      {mockMessages.map((message, index) => (
        <div key={index} className={`flex justify-start `}>
          <div
            className={`rounded-lg py-2 px-3 bg-base-300 ml-5 flex flex-row`}
          >
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className=" ml-5">
              <p className="text-sm">{message.message}</p>
              <div className="w-full flex justify-end">
                <span className="text-xs flex self-end  text-gray-500 mt-1">
                  {message.time}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default DisputeCommunication