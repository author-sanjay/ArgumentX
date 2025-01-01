function CustomerInformation() {
    return (
      <div className="w-full bg-base-100 px-5 py-2 rounded-lg shadow-lg">
        <h1 className="font-bold">Customer Information</h1>
        <div className="flex flex-col mt-2">
          <div className="text-xs">Name:</div>
          <div className="font-semibold">John Anderson</div>
        </div>
        <div className="flex flex-col mt-2">
          <div className="text-xs">Email:</div>
          <div className="font-semibold">johnanderson@gmail.com</div>
        </div>
        <div className="flex flex-col mt-2">
          <div className="text-xs">Phone Number:</div>
          <div className="font-semibold">+91 7303853148</div>
        </div>
        <div className="flex flex-col mt-2">
          <div className="text-xs">Company:</div>
          <div className="font-semibold">Articz</div>
        </div>
      </div>
    );
  }
  
  export default CustomerInformation;
  