import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function DashBoardNav({admin}) {
  const navigate = useNavigate()
  return (
    <div className="navbar bg-base-100 px-10 py-2 rounded-b-3xl shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={()=>{navigate("/dashboard")}}>ArgumentX {admin?"Admin":""}</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end"></div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardNav;
