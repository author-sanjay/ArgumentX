import { BadgeDollarSign } from "lucide-react";
import NewOrderSteps from "./NewOrderSteps";

function OrderSummary({ orderDetails, upsellOptions, setStep, step }) {
    return (
        <div className="w-auto shadow-lg rounded-lg h-auto  bg-base-100 p-8 flex flex-col items-center justify-center">
            <div className="h-min flex items-center justify-center flex-col">
                <h2 className="text-2xl mb-6 font-bold text-primary tracking-wide">Order Summary</h2>
                <div className="w-4/5 space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Size:</span>
                        <span className="">{orderDetails.size}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className=" font-semibold">Paper:</span>
                        <span className="">{orderDetails.paper}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className=" font-semibold">Images:</span>
                        <span className="">{orderDetails.images.join(", ")}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className=" font-semibold">Package:</span>
                        <span className="">{orderDetails.package}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className=" font-semibold">Orientation:</span>
                        <span className="">{orderDetails.orientation}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className=" font-semibold">3D Model:</span>
                        <span className="">{orderDetails.model}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className=" font-semibold">3D Model Description:</span>
                        <span className=" mt-2">{orderDetails.modelDescription}</span>
                    </div>
                    <div className="space-y-1">
                        <span className=" font-semibold">Upsell Options:</span>
                        <div className="flex flex-wrap gap-4 mt-1">
                            {upsellOptions.map((option, index) => (
                                <button
                                    key={index}
                                    className="px-4 py-1 rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition"
                                // onClick={() => handleUpsellClick(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <button className="btn btn-primary btn-md shadow-lg" onClick={() => { setStep(7) }}><BadgeDollarSign /><span>Proceed to Pricing</span></button>
                </div>
            </div>
            <NewOrderSteps setStep={setStep} step={step} />
        </div>
    );
}
export default OrderSummary