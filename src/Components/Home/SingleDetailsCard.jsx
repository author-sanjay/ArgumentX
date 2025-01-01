/* eslint-disable react/prop-types */
function SingleDetailsCard({icon,title,details}) {
  return (
    <div className="flex flex-col items-start w-2/5 h-full justify-center bg-base-200 px-10 py-5 rounded-3xl">
      {icon}
      <h3 className="text-xl mt-5 font-bold">{title}</h3>
      <p className="text-md mt-2">{details}</p>
    </div>
  )
}

export default SingleDetailsCard