import { useState } from "react";

function DisputeDetails() {
  const [isExpanded, setIsExpanded] = useState(false);

  const issueDescription = `
    The AR business card is not displaying properly when scanned. The 3D model appears distorted 
    and some interactive elements are not responding as expected. The AR business card is not 
    displaying properly when scanned. The 3D model appears distorted and some interactive elements 
    are not responding as expected. The AR business card is not displaying properly when scanned. 
    The 3D model appears distorted and some interactive elements are not responding as expected.
  `;

  const truncatedDescription = `${issueDescription.slice(0, 200)}...`;

  return (
    <div className="bg-base-100 h-min px-5 py-3 rounded-lg shadow-lg">
      <h1 className="font-bold mt-2">Dispute Information</h1>
      <div className="flex flex-row items-center mt-5">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User avatar"
            />
          </div>
        </div>
        <div className="ml-5 flex flex-col">
          <span className="font-bold">John Anderson</span>
          <span className="font-light text-xs">Filed on Jan 15, 2025</span>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col mt-[-1%]">
        <span className="font-bold">Issue Description</span>
        <p className="font-light text-sm mt-2 mb-5">
          {isExpanded ? issueDescription : truncatedDescription}
          <button
            className="ml-1 font-bold underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default DisputeDetails;
