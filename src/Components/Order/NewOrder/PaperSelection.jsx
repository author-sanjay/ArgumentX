import { useState } from "react";
import NewOrderSteps from "./NewOrderSteps";

function PaperSelection({ step, setStep, newOrderDetails, setNewOrderDetails }) {
  const [selectedPaper, setSelectedPaper] = useState("");

  const paperOptions = [
    { label: "Matte", value: "matte", image: "https://primofiles.imgix.net/subcategories/7MkGXLm8G3uBeiE1PDQI8KaaMSW24AYqtVDlziDA.jpeg" },
    { label: "Glossy", value: "glossy", image: "https://primofiles.imgix.net/subcategories/7S3xvHvcfG4VG55Pp97KBLVBKGmodquFkZGrN9qb.jpeg?fit=crop" },

  ];

  const handleSubmit = (data) => {
    setNewOrderDetails({ ...newOrderDetails, ...data })
    setStep(step + 1)
  };

  return (
    <div className="w-full mx-auto mt-8 p-6 flex items-center justify-center flex-col ">
      <h1 className="text-2xl mb-5 font-light ">Select Paper Type</h1>
      <div className="grid grid-cols-2 gap-10 w-1/2 h-full">
        {paperOptions.map((option) => (
          <div
            key={option.value}
            className={`card  shadow-md rounded-lg cursor-pointer overflow-hidden 
              transition-transform duration-200 ease-in-out 
              ${selectedPaper === option.value
                ? "ring ring-primary ring-offset-2 scale-105"
                : "hover:scale-105"
              }`}
            onClick={() => handleSubmit({ paperType: option.value })}
          >
            <img
              src={option.image}
              alt={`${option.label} paper`}
              className="w-full h-32 object-cover"
            />
            <div
              className={`p-4 text-center font-medium ${selectedPaper === option.value
                  ? "bg-primary text-primary-content"
                  : "bg-base-200 text-base-content"
                }`}
            >
              {option.label}
            </div>
          </div>
        ))}
      </div>
      <NewOrderSteps setStep={setStep} step={step} />
    </div>
  );
}

export default PaperSelection;
