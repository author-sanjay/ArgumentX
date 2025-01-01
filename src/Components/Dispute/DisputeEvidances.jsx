/* eslint-disable react/prop-types */
function DisputeEvidances({mockEvidence}) {
  return (
    <div className="bg-base-100 mt-5 py-5 px-5 rounded-lg shadow-lg">
    <h2 className="font-bold mb-3">Evidences</h2>
    <div className="flex overflow-x-scroll no-scrollbar space-x-4">
      {mockEvidence.map((evidence, index) => (
        <div key={index} className="flex-shrink-0 w-1/2 h-40">
          {evidence.type === "image" ? (
            <img
              src={evidence.src}
              alt={`Evidence ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <video
              src={evidence.src}
              controls
              className="w-full h-full rounded-lg"
            />
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default DisputeEvidances