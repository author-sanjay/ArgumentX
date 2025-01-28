import React from "react";
import NewOrderSteps from "./NewOrderSteps";
import { UploadCloud } from "lucide-react";

function NewOrderCardDesign({ step, setStep, newOrderDetails, setNewOrderDetails }) {
    return (
        <div className="w-full mx-auto h-4/5 mt-10 p-8 flex flex-col items-center justify-center ">
            <h1 className="text-3xl mb-6 font-semibold text-base-content">Upload Card Designs</h1>

            <div className="flex flex-row w-4/5 justify-between gap-8 h-3/5 mt-6">
                {/* Front Card Upload Section */}
                <div className="w-1/2 bg-base-100 h-full rounded-lg shadow-md px-6 py-8 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-base-300 hover:border-primary transition-all">
                    <UploadCloud size={40} className="text-base-content/60" />
                    <p className="text-base-content font-medium text-center">Drag & Drop Front Design Here</p>
                    <button className="btn btn-primary btn-sm">Browse Files</button>
                </div>

                {/* Back Card Upload Section */}
                <div className="w-1/2 bg-base-100 h-full rounded-lg shadow-md px-6 py-8 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-base-300 hover:border-primary transition-all">
                    <UploadCloud size={40} className="text-base-content/60" />
                    <p className="text-base-content font-medium text-center">Drag & Drop Back Design Here</p>
                    <button className="btn btn-primary btn-sm">Browse Files</button>
                </div>
            </div>
            <NewOrderSteps setStep={setStep} step={step} />
        </div>
    );
}

export default NewOrderCardDesign;
