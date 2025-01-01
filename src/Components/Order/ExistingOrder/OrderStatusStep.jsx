/* eslint-disable react/prop-types */
function OrderStatusSteps({ selectedOrder }) {
    const steps = ["Ordered", "AR Prepared", "Printing", "Shipped", "Delivered"];
    return (
      <div className="mt-5">
        <h1 className="font-bold py-2">Order Status</h1>
        <div className="mt-2 mb-2 flex w-full items-center justify-center">
          <ul className="steps">
            {steps.map((step, index) => {
              const isCompleted = steps.indexOf(selectedOrder.status) >= index;
              return (
                <li
                  key={step}
                  className={`step ${
                    isCompleted
                      ? "step-success"
                      : selectedOrder.status === "Cancelled"
                      ? "step-error"
                      : ""
                  }`}
                >
                  {step}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  
  export default OrderStatusSteps;
  