import { useState } from "react";

function TopNav() {
  const [loggedIn, setloggedIn] = useState(false);
  return (
    <div className="fixed z-10 top-2 flex items-center justify-center w-full">
      <div className="navbar bg-base-100  w-[95%] rounded-2xl flex self-center">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">ArgumentX</a>
        </div>
        <div className="flex-none">
          {loggedIn ? (
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
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div className="mr-10 bg-primary px-5 py-2 rounded-3xl text-primary-content font-bold cursor-pointer">
                Login
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNav;
