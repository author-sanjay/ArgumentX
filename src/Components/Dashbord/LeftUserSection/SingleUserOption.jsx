/* eslint-disable react/prop-types */
function SingleUserOption({ icon, OptionName, selected, onClick }) {
    return (
      <div
        className={`w-full h-fit rounded-lg flex flex-row items-center px-2 py-2 cursor-pointer transition-all duration-300 ${
          selected ? "bg-primary text-primary-content scale-105 shadow-lg" : "hover:bg-gray-100"
        }`}
        onClick={onClick}
      >
        {icon}
        <div className={`ml-4 font-medium text-sm`}>{OptionName}</div>
      </div>
    );
  }
  
  export default SingleUserOption;
  