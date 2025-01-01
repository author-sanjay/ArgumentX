/* eslint-disable react/prop-types */
import { useState } from "react";

function ChatModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-base-100 rounded-lg shadow-lg p-6 w-[90%] md:w-[40%]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-primary">Message Support</h2>
          <button
            className="btn btn-circle btn-sm btn-ghost"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Message Input */}
        <textarea
          className="textarea textarea-primary w-full h-28 resize-none mb-4"
          placeholder="Type your message here..."
        />

        {/* Attachments */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Add Attachments:
          </label>
          <input type="file" className="file-input file-input-primary w-full" />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3">
          <button className="btn btn-primary" onClick={onClose}>
            Send
          </button>
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function DisputeQuickAction() {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatModalOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatModalOpen(false);
  };

  return (
    <div className="mt-5 bg-base-100 px-5 py-5 shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Quick Actions</h1>
      <div className="flex flex-col gap-3">
        <button className="btn btn-success btn-sm w-full">
          Resolve Dispute
        </button>
        <button className="btn  btn-sm w-full">Download Report</button>
        <button
          className="btn btn-primary btn-sm w-full"
          onClick={handleOpenChat}
        >
          Send Message
        </button>
      </div>
      {isChatModalOpen && <ChatModal onClose={handleCloseChat} />}
    </div>
  );
}

export default DisputeQuickAction;
