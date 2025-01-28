import { useState } from "react";
import OrientationSelection from "./OrientationSelection";
import PaperSelection from "./PaperSelection";
import SizeSelection from "./SizeSelection";
import NewOrderStepOne from "./NewOrderStepOne";
import NewOrderCardDesign from "./NewOrderCardDesign";

function Neworder() {
  const [step, setStep] = useState(1)
  const [newOrderDetails, setNewOrderDetails] = useState({})
  return (
    <div className="w-full h-[95%] flex flex-col items-center justify-center">
      {step === 1 && <NewOrderStepOne newOrderDetails={newOrderDetails} setNewOrderDetails={setNewOrderDetails} setStep={setStep} step={step} />}
      {step === 2 && <PaperSelection newOrderDetails={newOrderDetails} setNewOrderDetails={setNewOrderDetails} setStep={setStep} step={step} />}
      {step === 3 && <SizeSelection newOrderDetails={newOrderDetails} setNewOrderDetails={setNewOrderDetails} setStep={setStep} step={step} />}
      {step === 4 && <OrientationSelection newOrderDetails={newOrderDetails} setNewOrderDetails={setNewOrderDetails} setStep={setStep} step={step} />}
      {step === 5 && <NewOrderCardDesign newOrderDetails={newOrderDetails} setNewOrderDetails={setNewOrderDetails} setStep={setStep} step={step} />}
    </div>
  );
}

export default Neworder;
