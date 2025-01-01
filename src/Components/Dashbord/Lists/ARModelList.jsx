import { X } from "lucide-react";
import { useState } from "react";

const mockData = [
  {
    id: 1,
    arModelName: "Headphone AR Model",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  },
  {
    id: 2,
    arModelName: "Smartphone AR Model",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  },
  {
    id: 3,
    arModelName: "Laptop AR Model",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  },
  {
    id: 4,
    arModelName: "Speaker AR Model",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  },
  {
    id: 5,
    arModelName: "Fitness Tracker AR Model",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  },
  {
    id: 6,
    arModelName: "4K TV AR Model",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  },
  {
    id: 7,
    arModelName: "Drone AR Model",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  },
  {
    id: 8,
    arModelName: "Scooter AR Model",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  },
];

function ARModelList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedModel, setSelectedModel] = useState(null);
  const itemsPerPage = 4;

  const paginatedData = mockData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  const handleCloseModal = () => setSelectedModel(null);

  return (
    <div className="flex flex-col">
      <div className="py-2 text-xl font-extralight">AR Models</div>
      <div className="divider mb-5 mt-0"></div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {paginatedData.map((item) => (
          <>
            <div className="flex relative flex-col ">
              <div
                key={item.id}
                className="flex flex-col items-center border p-3 shadow-md cursor-pointer"
                onClick={() => setSelectedModel(item)}
              >
                <model-viewer
                  src={item.modelUrl}
                  alt={item.arModelName}
                  camera-controls
                  ar
                  className="h-48 w-48"
                ></model-viewer>
              </div>
              <div className="mt-5 flex flex-row justify-between items-center text-sm">
                <span className="btn btn-success w-full">Request change</span>
              </div>
              <div className="absolute top-0 right-0 bg-red-400 text-white rounded-bl-lg"><X/></div>
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-between mt-5">
        <button
          className="btn btn-xs"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-xs"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {selectedModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative h-[80vw] w-[80vw] max-h-[600px] max-w-[600px] flex items-center justify-center flex-row">
            <button
              onClick={handleCloseModal}
              className="absolute top-14 right-5 text-white text-2xl font-bold z-50"
            >
              ✖
            </button>
            <model-viewer
              src={selectedModel.modelUrl}
              alt={selectedModel.arModelName}
              camera-controls
              ar
              style={{
                width: "80%",
                maxWidth: "600px",
                height: "80%",
                borderRadius: "20px",
                zIndex: 2,
                backdropFilter: "blur(20px)",
              }}
            ></model-viewer>
          </div>
        </div>
      )}
    </div>
  );
}

export default ARModelList;
