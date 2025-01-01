import { useState } from "react";

function PostDispute() {
  const [attachments, setAttachments] = useState([]);
  const [category, setCategory] = useState("");

  const predefinedCategories = ["Delivery", "AR Model", "Payment", "Others"];

  const handleAttachmentUpload = (event) => {
    const files = Array.from(event.target.files);
    setAttachments((prev) => [...prev, ...files]);
  };

  const handleRemoveAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!category) {
      alert("Please select a category.");
      return;
    }
    console.log("Dispute submitted with category:", category);
  };

  return (
    <div className="h-full flex  justify-center bg-base-300 py-5 px-5">
      <div className=" w-full max-w-3xl px-5 ">
        <h1 className="text-2xl font-bold ">Report a Problem</h1>
        <p className=" mt-2">
          Submit your dispute regarding the following order:
        </p>
        <div className="bg-base-100 w-full max-w-md px-5 py-3 rounded-lg mt-2 shadow-lg flex items-center gap-4">
          {/* Product Image */}
          <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/150" // Replace with your product image URL
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Order Details */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold ">AR Visiting Card</h2>
            <p className="text-sm ">
              <span className="font-medium">Delivery Date:</span> Dec 31, 2024
            </p>
            <p className="text-sm ">
              <span className="font-medium">Price:</span> $49.99
            </p>
          </div>
        </div>

        <div className="bg-base-100 py-5 px-14 mt-5 rounded-lg shadow-lg">
          <div className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium  mb-1">
                Dispute Category
              </label>
              <select
                className="select select-bordered w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select category
                </option>
                {predefinedCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium  mb-1">Subject</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Brief description of the issue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium  mb-1">
                Description
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Provide detailed information about your dispute"
                rows="5"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium  mb-1">
                Attachments
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center">
                <p className="">Drag and drop files here or</p>
                <label className="text-primary underline cursor-pointer">
                  Browse Files
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleAttachmentUpload}
                  />
                </label>
              </div>
              {attachments.length > 0 && (
                <div className="mt-4">
                  <ul className="space-y-2">
                    {attachments.map((file, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
                      >
                        <span className="truncate">{file.name}</span>
                        <button
                          className="text-red-500"
                          onClick={() => handleRemoveAttachment(index)}
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 flex justify-end space-x-4">
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => console.log("Cancelled")}
            >
              Cancel
            </button>
            <button className="btn btn-sm btn-primary" onClick={handleSubmit}>
              Submit Dispute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDispute;
