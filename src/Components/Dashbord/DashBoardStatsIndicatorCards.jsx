/* eslint-disable react/prop-types */
function DashBoardStatsIndicatorCards({
  statsname,
  statsIcon,
  statsNumber,
  onclick,
}) {
  return (
    <div
      className="bg-base-100 w-[30%] px-5 py-3 rounded-lg shadow-lg flex flex-col cursor-pointer"
      onClick={onclick}
    >
      <div className="flex flex-row w-full justify-between  items-center">
        <span className="text-md font-light">{statsname}</span>
        {statsIcon}
      </div>
      <div className="text-2xl font-bold mt-3">{statsNumber}</div>
    </div>
  );
}

export default DashBoardStatsIndicatorCards;
