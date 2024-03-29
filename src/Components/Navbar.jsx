import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar shadow-lg bg-base-100 fixed z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-transparent hover:bg-transparent text-lg text-[#131313CC] border border-[#23BE0A] rounded-lg hover:border-[#23BE0A]"
                  : "btn border-transparent hover:border-transparent bg-transparent hover:bg-transparent text-lg text-[#131313CC] rounded-lg shadow-transparent"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listedbooks"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-transparent hover:bg-transparent text-lg text-[#131313CC] border border-[#23BE0A] rounded-lg hover:border-[#23BE0A]"
                  : "btn border-transparent hover:border-transparent bg-transparent hover:bg-transparent text-lg text-[#131313CC] rounded-lg shadow-transparent"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pagestoread"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-transparent hover:bg-transparent text-lg text-[#131313CC] border border-[#23BE0A] rounded-lg hover:border-[#23BE0A]"
                  : "btn border-transparent hover:border-transparent bg-transparent hover:bg-transparent text-lg text-[#131313CC] rounded-lg shadow-transparent"
              }
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <NavLink className="btn bg-transparent hover:bg-transparent hover:border-transparent border-transparent shadow-transparent text-3xl font-bold">
          Book Vibe
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn  bg-transparent hover:bg-transparent text-lg text-[#131313CC]  border border-[#23BE0A] rounded-lg hover:border-[#23BE0A]"
                : "btn border-transparent hover:border-transparent bg-transparent hover:bg-transparent text-lg text-[#131313CC] rounded-lg shadow-transparent"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listedbooks"
            className={({ isActive }) =>
              isActive
                ? "btn bg-transparent hover:bg-transparent text-lg text-[#131313CC] border border-[#23BE0A] rounded-lg hover:border-[#23BE0A]"
                : "btn border-transparent hover:border-transparent bg-transparent hover:bg-transparent text-lg text-[#131313CC] rounded-lg shadow-transparent"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pagestoread"
            className={({ isActive }) =>
              isActive
                ? "btn bg-transparent hover:bg-transparent text-lg text-[#131313CC] border border-[#23BE0A] rounded-lg hover:border-[#23BE0A]"
                : "btn border-transparent hover:border-transparent bg-transparent hover:bg-transparent text-lg text-[#131313CC] rounded-lg shadow-transparent"
            }
          >
            Pages to Read
          </NavLink>
          <NavLink
            to="/contactme"
            className={({ isActive }) =>
              isActive
                ? "btn bg-transparent hover:bg-transparent text-lg text-[#131313CC] border border-[#23BE0A] rounded-lg hover:border-[#23BE0A]"
                : "btn border-transparent hover:border-transparent bg-transparent hover:bg-transparent text-lg text-[#131313CC] rounded-lg shadow-transparent"
            }
          >
            Contact Me
          </NavLink>
          <NavLink
            to="/aboutme"
            className={({ isActive }) =>
              isActive
                ? "btn bg-transparent hover:bg-transparent text-lg text-[#131313CC] border border-[#23BE0A] rounded-lg hover:border-[#23BE0A]"
                : "btn border-transparent hover:border-transparent bg-transparent hover:bg-transparent text-lg text-[#131313CC] rounded-lg shadow-transparent"
            }
          >
            About Me
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-4 hidden lg:flex">
        <button className="btn bg-[#23BE0A] text-white text-lg font-semibold hover:bg-[#23BE0A]">
          <NavLink>Sign In</NavLink>
        </button>
        <button className="btn bg-[#59C6D2] text-white text-lg font-semibold hover:bg-[#59C6D2]">
          <NavLink>Sign Up</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
