import { RiMenu2Line } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { CgCloseR } from "react-icons/cg";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const notIsActiveStyle =
    "text-gray-100 hover:text-white transition-all duratiion-100 ease-in-out font-base";
  const isActiveStyle =
    "hover:text-white transition-all duratiion-100 ease-in-out text-blue-500 font-semibold";

  return (
    <header className="bg-dark w-full flex items-center justify-between py-8 px-5 md:px-7 lg:px-20 md:py-10 lg:pb-0">
      <div className="text-blue-500 uppercase text-2xl font-black track-widest">
        BlueSky
      </div>
      <RiMenu2Line
        className="text-white hover:text-blue-500 text-3xl md:hidden cursor-pointer"
        onClick={() => setToggleSidebar(true)}
      />
      <div className="tracking-wide hidden text-sm md:flex items-center space-x-12 lg:space-x-16">
        <NavLink
          className={({ isActive }) =>
            isActive ? isActiveStyle : notIsActiveStyle
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/buy"
          className={({ isActive }) =>
            isActive ? isActiveStyle : notIsActiveStyle
          }
        >
          Buy A House
        </NavLink>
        <NavLink
          to="/rent"
          className={({ isActive }) =>
            isActive ? isActiveStyle : notIsActiveStyle
          }
        >
          Rent A House
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? isActiveStyle : notIsActiveStyle
          }
        >
          Contact
        </NavLink>
        <Link to="/search">
          <BsSearch />
        </Link>
      </div>
      {toggleSidebar && (
        <div className="fixed top-0 right-0 left-0 bottom-0 w-full bg-dark text-white flex flex-col items-center justify-center space-y-16 text-2xl animate-slide-in h-screen overflow-y-auto shadow-md z-10">
          <div
            className="absolute right-0 top-0 my-6 mx-5 text-3xl text-white cursor-pointer"
            onClick={() => setToggleSidebar(false)}
          >
            <CgCloseR />
          </div>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyle : notIsActiveStyle
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyle : notIsActiveStyle
            }
            to="/buy"
          >
            Buy A House
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyle : notIsActiveStyle
            }
            to="/rent"
          >
            Rent A House
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyle : notIsActiveStyle
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <Link to="/search">
            <BsSearch />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
