/* eslint-disable react/prop-types */

function DisputeSteps({statusOrder,latestStatus,sortedChangeLog}) {
  return (
    <div className="bg-base-100 px-5 py-5 mt-[-3%] rounded-lg shadow-lg">
    <div className="text-lg font-semibold mb-4">Status Timeline</div>
    <ul className="steps steps-vertical">
      {statusOrder.map((status, index) => {
        const isCompleted =
          statusOrder.indexOf(status) <=
          statusOrder.indexOf(latestStatus);
        const isActive = status === latestStatus;

        return (
          <li
            key={index}
            className={`step ${isCompleted ? "step-success" : ""} ${
              isActive ? "step-primary" : ""
            }`}
          >
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium">{status}</span>
              {sortedChangeLog.find((log) => log.status === status)
                ?.timestamp && (
                <span className="text-xs text-gray-500">
                  {sortedChangeLog
                    .find((log) => log.status === status)
                    ?.timestamp.format("D MMMM YYYY, h:mm A")}
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
  )
}

export default DisputeSteps