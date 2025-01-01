/* eslint-disable react/prop-types */
import moment from "moment";
import { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import ThemeToggle from "../Components/Theme/ThemeToggle";
import DashBoardNav from "../Components/Dashbord/DashBoardNav";

function UploadARScreen({ orderId="#111", customerName="James", orderDate=moment().format("Do MMMM YY"), status="Processing" }) {
  const [arModelFile, setArModelFile] = useState(null);
  const [trackingFile, setTrackingFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
 const { theme } = useTheme();
  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(file);
      if (setter === setTrackingFile) {
        // Generate preview URL for tracking file
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      }
    }
  };

  const handleCancel = () => {
    setArModelFile(null);
    setTrackingFile(null);
    setPreviewUrl(null);
  };

  const handleUpload = () => {
    if (arModelFile && trackingFile) {
      // Handle upload logic (e.g., API call)
      alert("Files uploaded successfully!");
    } else {
      alert("Please upload both files before submitting.");
    }
  };

  return (
    <div className="w-screen bg-base-200 flex-col flex items-center justify-center h-screen overflow-hidden  select-none"   data-theme={theme} >
      <DashBoardNav admin={true} />
    <div className="w-2/3 flex  flex-col px-8 py-6 ">
      {/* Order Details Section */}
      <div className="mb-6 bg-base-100 px-10 py-5 rounded-lg shadow-lg">
        <h1 className="font-bold text-lg mb-4">Order Details</h1>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">
              <span className="font-bold">Order ID:</span> {orderId}
            </p>
            <p className="text-sm">
              <span className="font-bold">Customer:</span> {customerName}
            </p>
            <p className="text-sm">
              <span className="font-bold">Order Date:</span> {orderDate}
            </p>
          </div>
          <div>
            <span
              className={`py-1 px-3 rounded-lg text-sm ${
                status === "Pending AR Upload"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* Upload AR Files Section */}
      <div className="mb-6  bg-base-100 px-10 py-5 rounded-lg shadow-lg">
        <h1 className="font-bold text-lg mb-4">Upload AR Files</h1>
        {/* AR Model File Input */}
        <div className="mb-4">
          <label className="block font-bold text-sm mb-2">AR Model File</label>
          <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center">
            <input
              type="file"
              accept=".glb"
              className="hidden"
              id="arModelFile"
              onChange={(e) => handleFileChange(e, setArModelFile)}
            />
            <label
              htmlFor="arModelFile"
              className="cursor-pointer text-blue-500 underline"
            >
              {arModelFile ? arModelFile.name : "Drag and drop your AR model file here or browse"}
            </label>
            <p className="text-xs text-gray-500">
              Supported formats: .glb (Max size: 50MB)
            </p>
          </div>
        </div>

        {/* Image Tracking File Input */}
        <div className="mb-4">
          <label className="block font-bold text-sm mb-2">Image Tracking File</label>
          <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center">
            <input
              type="file"
              accept=".mind"
              className="hidden"
              id="trackingFile"
              onChange={(e) => handleFileChange(e, setTrackingFile)}
            />
            <label
              htmlFor="trackingFile"
              className="cursor-pointer text-blue-500 underline"
            >
              {trackingFile ? trackingFile.name : "Drag and drop your tracking image here or browse"}
            </label>
            <p className="text-xs text-gray-500">
              Supported formats: .mind (Max size: 50MB)
            </p>
          </div>
        </div>
        {/* Preview Section */}
        <div className="flex justify-end gap-4">
        <button
          className="btn btn-error btn-sm"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={handleUpload}
        >
          Upload Files
        </button>
      </div> 
      
      </div>

      {/* Buttons */}

      </div>   
      <ThemeToggle /> </div>
  );
}

export default UploadARScreen;
