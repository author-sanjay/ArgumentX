import { Check, X } from "lucide-react"
import NewOrderSteps from "./NewOrderSteps"

function NewOrderStepOne({ step, setStep, newOrderDetails, setNewOrderDetails }) {
  const handleClick = (data) => {
    setNewOrderDetails({ ...newOrderDetails, ...data });
    setStep(step + 1);
  }
  return (
    <div className="w-screen h-full bg-base-300 flex-col flex items-center justify-center py-10">
      <div className="flex mt-10 flex-col items-center justify-center">
        <h1 className="flex text-3xl font-bold ">Choose Your Package</h1>
        <p className="mt-3">Select the package according to your needs</p>
      </div>
      <div className="flex flex-row gap-10 w-4/5 mt-14 mb-10">
        <div className="card bg-base-100 w-80 py-10 flex items-center justify-center flex-col shadow-xl">
          <div className="px-2 w-4/5 flex items-start justify-center flex-col">
            <h2 className="card-title">Your Asset, Our Hosting </h2>
            <div className="flex flex-row mt-2 items-center justify-center">
              <Check height={12} className="mr-2" width={12} color="#7CFC00" />
              <span>100 Print Cards</span>
            </div>
            <div className="flex flex-row mt-2 items-center justify-center">
              <Check height={12} width={12} className="mr-2" color="#7CFC00" />
              <span>1 Year AR Hosting</span>
            </div>
            <div className="flex flex-row mt-2 items-center justify-center">
              <Check height={12} width={12} color="#7CFC00" className="mr-2" />
              <span>You Provide AR Asset</span>
            </div>
            <div className="card-actions mt-5 w-full ">
              <button className="btn  hover:btn-primary w-full mt-5" onClick={() => { handleClick({ packageId: 1 }) }}>
                Get My Card
              </button>
            </div>
          </div>
        </div>
        <div className="card  w-80 py-10 bg-primary text-primary-content flex items-center justify-center flex-col shadow-xl">
          <div className="px-2 w-4/5 flex items-start justify-center flex-col">
            <h2 className="card-title">Your Idea, Our Hardwork </h2>
            <div className="flex flex-row mt-2 items-center justify-center">
              <Check height={12} className="mr-2" width={12} color="	#7CFC00" />
              <span>100 Print Cards</span>
            </div>
            <div className="flex flex-row mt-2 items-center justify-center">
              <Check height={12} width={12} className="mr-2" color="	#7CFC00" />
              <span>1 Year AR Hosting</span>
            </div>
            <div className="flex flex-row mt-2 items-center justify-center">
              <Check height={12} width={12} color="	#7CFC00" className="mr-2" />
              <span>We Create your AR Asset</span>
            </div>
            <div className="card-actions mt-5 w-full ">
              <button className="btn  hover:btn-primary w-full mt-5" onClick={() => { handleClick({ packageId: 2 }) }}>
                Get My Card
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-80 py-10 flex items-center justify-center flex-col shadow-xl">
          <div className="px-2 w-4/5 flex items-start justify-center flex-col">
            <h2 className="card-title">Your Print, Our Hosting </h2>
            <div className="flex flex-row mt-2 items-center justify-center">
              <X height={12} className="mr-2" width={12} color="red" />
              <span>100 Print Cards</span>
            </div>
            <div className="flex flex-row mt-2 items-center justify-center">
              <Check height={12} width={12} className="mr-2" color="#7CFC00" />
              <span>1 Year AR Hosting</span>
            </div>
            <div className="flex flex-row mt-2 items-center justify-center">
              <Check height={12} width={12} color="#7CFC00" className="mr-2" />
              <span>We Provide QR to print</span>
            </div>
            <div className="card-actions mt-5 w-full ">
              <button className="btn  hover:btn-primary w-full mt-5" onClick={() => { handleClick({ packageId: 3 }) }}>
                Get My Card
              </button>
            </div>
          </div>
        </div>
      </div>
      <NewOrderSteps setStep={setStep} step={step} />
    </div>
  )
}

export default NewOrderStepOne