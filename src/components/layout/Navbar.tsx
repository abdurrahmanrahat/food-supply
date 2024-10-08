import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import ActiveLink from "../ui/ActiveLink";
import ThemeToggle from "../ui/ThemeToggle";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const user = useAppSelector(useCurrentUser);

  const dispatch = useAppDispatch();

  // logout user
  const handleLogout = () => {
    dispatch(logout());
    toast.success("User logout successfully", {
      duration: 800,
    });
  };

  return (
    <motion.div
      className="bg-primary-bg"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6 }}
    >
      <header className="w-full max-w-[1260px] px-[12px] md:px-[20px] mx-auto py-[16px] 2xl:py-[18px]">
        <nav className=" flex justify-between items-center">
          {/* logo */}
          <Link to="/">
            <h2 className="text-primary-text text-[28px] font-bold">
              Food<span className="text-secondary-text opacity-80">SUP</span>
            </h2>
          </Link>

          {/* desktop nav links */}
          <ul className="space-x-6 hidden lg:flex items-center text-[#D5E7F3]">
            <li className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/supplies">All Supplies</ActiveLink>
            </li>
            <li className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/about-us">About Us</ActiveLink>
            </li>
            <li className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/community">Community</ActiveLink>
            </li>

            <DropDownMenu />

            <li className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/admin/dashboard">Dashboard</ActiveLink>
            </li>
            <li onClick={() => setToggle((prev) => !prev)}>
              <ThemeToggle />
            </li>
            {user ? (
              <button
                onClick={handleLogout}
                className="px-[20px] md:px-[24px] text-[15px] py-[8px] bg-secondary-text opacity-80 hover:bg-white duration-500 text-white hover:text-black font-medium cursor-pointer rounded-md"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="px-[20px] md:px-[24px] text-[15px] py-[8px] bg-secondary-text opacity-80 hover:bg-white duration-500 text-white hover:text-black font-medium cursor-pointer rounded-md">
                  Login
                </button>
              </Link>
            )}
          </ul>

          {/* mobile menu */}
          <div className="lg:hidden">
            {/* toggle open icon */}
            <div onClick={() => setToggle((prev) => !prev)}>
              <GiHamburgerMenu className="w-8 h-8 text-[#D5E7F3]" />
            </div>

            {toggle && (
              <motion.div
                className="absolute top-0 left-0 p-3 w-full z-10"
                initial={{ y: 200, scale: 0.7, opacity: 0.6 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="p-5 bg-white rounded shadow-md">
                  {/* logo and close toggle icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <Link onClick={() => setToggle((prev) => !prev)} to="/">
                        <h2 className="text-[#D5E7F3] text-[28px] font-bold">
                          Food
                          <span className="text-secondary-text opacity-80">
                            SUP
                          </span>
                        </h2>
                      </Link>
                    </div>
                    <div onClick={() => setToggle((prev) => !prev)}>
                      <IoMdClose className="h-8 w-8" />
                    </div>
                  </div>

                  {/* mobile nav items */}
                  <ul className="space-y-4">
                    <li
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
                    >
                      <ActiveLink to="/">Home</ActiveLink>
                    </li>
                    <li
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
                    >
                      <ActiveLink to="/supplies">All Supplies</ActiveLink>
                    </li>
                    <li
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
                    >
                      <ActiveLink to="/about-us">About Us</ActiveLink>
                    </li>
                    <li
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
                    >
                      <ActiveLink to="/community">Community</ActiveLink>
                    </li>

                    <DropDownMenu />

                    <li
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
                    >
                      <ActiveLink to="/admin/dashboard">Dashboard</ActiveLink>
                    </li>
                    <li onClick={() => setToggle((prev) => !prev)}>
                      <ThemeToggle />
                    </li>
                    {user ? (
                      <button
                        onClick={handleLogout}
                        className="px-[20px] md:px-[24px] py-[6px] bg-[#DABC95] hover:bg-[#F2D1A5] duration-500 text-white font-medium cursor-pointer rounded-md"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link to="/login">
                        <button className="px-[20px] md:px-[24px] py-[6px] bg-[#DABC95] hover:bg-[#F2D1A5] duration-500 text-white font-medium cursor-pointer rounded-md">
                          Login
                        </button>
                      </Link>
                    )}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </nav>
      </header>
    </motion.div>
  );
};

export default Navbar;
