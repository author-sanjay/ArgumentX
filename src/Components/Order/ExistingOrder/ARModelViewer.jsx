/* eslint-disable react/prop-types */
function ARModelViewer({ isModalOpen, handleOpenModal, handleCloseModal }) {
    return (
      <>
        <div className="w-full mt-5 bg-base-100 rounded-lg shadow-lg px-5 py-2">
          <h1 className="font-bold">AR Modal Review</h1>
          <div className="mt-3 flex justify-center mb-1">
            <div
              className="cursor-pointer w-full h-56 border rounded-lg overflow-hidden"
              onClick={handleOpenModal}
            >
              <model-viewer
                src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                alt="AR Model"
                auto-rotate
                camera-controls
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                  backgroundColor: "grey",
                  backdropFilter: "blur(10px)",
                }}
              />
            </div>
          </div>
          <p className="text-xs text-center text-gray-500">
            Interact with the 3D model:{" "}
            <span className="font-medium">Ctrl + Click</span> to move,{" "}
            <span className="font-medium">Scroll or Pinch</span> to zoom, and{" "}
            <span className="font-medium">Drag</span> to rotate.
          </p>
        </div>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-[80%] h-[80%] rounded-3xl shadow-lg">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 z-10 right-4 btn btn-sm btn-error"
              >
                Close
              </button>
              <model-viewer
                src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                alt="AR Model"
                auto-rotate
                camera-controls
                ar
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "1.5rem",
                  backgroundColor: "grey",
                  backdropFilter: "blur(10px)",
                }}
              />
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default ARModelViewer;
  