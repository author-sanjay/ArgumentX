import { ShoppingCart } from "lucide-react";
import NewOrderSteps from "./NewOrderSteps";
const pricingDetails = {
    printingCharges: 50, // Example price for card printing
    hostingCharges: 20,  // Example price for AR hosting
    expectedArCharges: 100 // Estimated AR development charge (final may vary)
};

function PricingPage({ setStep, step }) {
    return (
        <div className="w-1/3 mx-auto h-auto  p-8 flex flex-col items-center justify-center bg-base-100 rounded-xl shadow-2xl">
            <h2 className="text-2xl mb-6 font-bold text-primary tracking-wide">Pricing Breakdown</h2>
            <div className="w-4/5 space-y-6">
                <div className="flex justify-between">
                    <span className=" font-semibold">Printing:</span>
                    <span className="">${pricingDetails.printingCharges}</span>
                </div>
                <div className="flex justify-between">
                    <span className=" font-semibold">AR Hosting:</span>
                    <span className="">${pricingDetails.hostingCharges}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">AR Development:</span>
                    <span className="">${pricingDetails.expectedArCharges}</span>
                </div>
                <div className="text-error text-xs mt-4">AR Development charges are estimated.<br/> Complex models may <b>cost more</b>,<br/> simple models may be <b>Refunded</b>.</div>
            </div>
            <div className="mt-8">
                <button className="btn btn-primary btn-md shadow-lg" onClick={()=>{setStep(8)}}><ShoppingCart/><span>Proceed to Checkout</span></button>
            </div>
            <NewOrderSteps setStep={setStep} step={step} />
        </div>
    );
}

export default PricingPage