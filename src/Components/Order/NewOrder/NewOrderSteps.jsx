function NewOrderSteps({ step, setStep }) {
    return (
        <ul className="steps absolute bottom-10">
            <li className={`step ${step >= 1 ? "step-success" : ""}`} onClick={() => { setStep(1) }}>Package</li>
            <li className={`step ${step >= 2 ? "step-success" : ""}`} onClick={() => { setStep(2) }}>Paper</li>
            <li className={`step ${step >= 3 ? "step-success" : ""}`} onClick={() => { setStep(3) }}>Size</li>
            <li className={`step ${step >= 4 ? "step-success" : ""}`} onClick={() => { setStep(4) }}>Orientation</li>
            <li className={`step ${step >= 5 ? "step-success" : ""}`} onClick={() => { setStep(5) }}>Design</li>
            <li className={`step ${step >= 6 ? "step-success" : ""}`} onClick={() => { setStep(6) }}>Summary</li>
            <li className={`step ${step >= 7 ? "step-success" : ""}`} onClick={() => { setStep(7) }}>Pricing</li>
            <li className={`step ${step >= 8 ? "step-success" : ""}`} onClick={() => { setStep(8) }}>Success</li>
        </ul>
    )
}

export default NewOrderSteps