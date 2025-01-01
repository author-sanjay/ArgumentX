import { useState } from "react";

function OrientationSelection() {
  const [selectedOrientation, setSelectedOrientation] = useState("");

  const orientationOptions = [
    {
      label: "Landscape",
      value: "landscape",
      image: "https://images.pexels.com/photos/12048938/pexels-photo-12048938.jpeg", // Replace with actual image URL
    },
    {
      label: "Portrait",
      value: "portrait",
      image: "https://images.pexels.com/photos/7966637/pexels-photo-7966637.jpeg", // Replace with actual image URL
    },
  ];

  const handleSubmit = () => {
    if (selectedOrientation) {
      alert(`Orientation selected: ${selectedOrientation}`);
    } else {
      alert("Please select an orientation.");
    }
  };

  return (
    <div className="w-full mx-auto mt-8 p-6 flex items-center justify-center flex-col">
      <h1 className="text-2xl mb-5 font-light">Select Orientation</h1>
      <div className="grid grid-cols-2 gap-10 w-1/2 h-full">
        {orientationOptions.map((option) => (
          <div
            key={option.value}
            className={`card shadow-md rounded-lg cursor-pointer overflow-hidden 
              transition-transform duration-200 ease-in-out 
              ${
                selectedOrientation === option.value
                  ? "ring ring-primary ring-offset-2 scale-105"
                  : "hover:scale-105"
              }`}
            onClick={() => setSelectedOrientation(option.value)}
          >
            <img
              src={option.image}
              alt={`${option.label} orientation`}
              className="w-full h-32 object-cover"
            />
            <div
              className={`p-4 text-center font-medium ${
                selectedOrientation === option.value
                  ? "bg-primary text-primary-content"
                  : "bg-base-200 text-base-content"
              }`}
            >
              {option.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default OrientationSelection;
