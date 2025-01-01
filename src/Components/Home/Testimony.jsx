

function Testimony() {
  return (
    <div className="min-h-[50vh] w-full flex flex-col justify-center items-center">
      <div className=" text-center ">
        <h1 className="text-3xl font-bold mb-3">What our users say</h1>
        <p className="text-sm">
          Join thousands of satisfied customers using AR Cards
        </p>
      </div>
      <div className="w-[80%] flex flex-row gap-10">
        <div className="mt-10 relative bg-base-300 w-1/3 px-5 rounded-xl py-5">
          <p>
            I handed over my AR Visiting Card at a trade show, and everyone was
            amazed! It’s the ultimate conversation starter.
          </p>
          <h3 className="text-sm mt-5 absolute bottom-5 font-bold">
            Sarah L., Marketing Consultant
          </h3>
        </div>
        <div className="mt-10 bg-base-300 w-1/3 px-5 relative rounded-xl py-5">
          <p>
          The customization options were incredible. My card perfectly reflects my brand, and the AR feature adds so much value.
          </p>
          <h3 className="text-sm mt-5 ab font-bold bottom-5">
          James P., Business Owner
          </h3>
        </div>
        <div className="mt-10 bg-base-300 w-1/3 px-5 relative rounded-xl py-5">
          <p>
          Next will be your experience.....
          </p>
          <h3 className="text-sm mt-5 absolute font-bold bottom-5">
          Your Name, Your Profession
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
