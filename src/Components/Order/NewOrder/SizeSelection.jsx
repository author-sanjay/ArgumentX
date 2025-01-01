
    import { useState } from "react";

    function SizeSelection() {
      const [selectedSize, setSelectedSize] = useState("");
    
      const sizeOptions = [
        { label: "Standard (3.5 x 2 in)", value: "standard" },
        { label: "Square (2.5 x 2.5 in)", value: "square" },
        { label: "Mini (3 x 1.25 in)", value: "mini" },
      ];
    
      const handleSubmit = () => {
        if (selectedSize) {
          alert(`Size selected: ${selectedSize}`);
        } else {
          alert("Please select a size.");
        }
      };
    
      return (
        <div className="w-full mx-auto mt-8 p-6 flex items-center justify-center flex-col">
          <h1 className="text-2xl mb-5 font-light">Select Size</h1>
          <div className="grid grid-cols-1 gap-4 w-1/2">
            {sizeOptions.map((option) => (
              <div
                key={option.value}
                className={`card shadow-md rounded-lg cursor-pointer p-4 text-center 
                  transition-transform bg-base-300 duration-200 ease-in-out font-medium 
                  ${
                    selectedSize === option.value
                      ? "ring ring-primary ring-offset-2 scale-105 bg-primary text-primary-content"
                      : "hover:scale-105 bg-base-200 text-base-content"
                  }`}
                onClick={() => setSelectedSize(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
         
        </div>
      );
    }
    
    export default SizeSelection;
 