import { motion } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ActiveLink from "../ui/ActiveLink";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div
      className="bg-primary-bg"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6 }}
    >
      <header className="w-full max-w-[1230px] px-[12px] md:px-[20px] mx-auto py-[16px] 2xl:py-[18px]">
        <nav className=" flex justify-between items-center">
          {/* logo */}
          <Link to="/">
            <h2 className="text-primary-text text-[28px] font-bold">
              Food<span className="text-secondary-text opacity-80">SUP</span>
            </h2>
          </Link>

          {/* desktop nav links */}
          <ul className="space-x-6 hidden lg:flex text-[#D5E7F3]">
            <li className="font-semibold md:text-[18px] 2xl:text-[19px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li className="font-semibold md:text-[18px] 2xl:text-[19px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/supplies">All Supplies</ActiveLink>
            </li>
            <li className="font-semibold md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/admin/dashboard">Dashboard</ActiveLink>
            </li>
            <li className="font-semibold md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/login">Login</ActiveLink>
            </li>
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
                      className="font-semibold md:text-[18px] 2xl:text-[19px] hover:text-secondary-text transition-all duration-500"
                    >
                      <ActiveLink to="/">Home</ActiveLink>
                    </li>
                    <li
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-semibold md:text-[18px] 2xl:text-[19px] hover:text-secondary-text transition-all duration-500"
                    >
                      <ActiveLink to="/supplies">All Supplies</ActiveLink>
                    </li>
                    <li
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-semibold md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
                    >
                      <ActiveLink to="/admin/dashboard">Dashboard</ActiveLink>
                    </li>
                    <li
                      onClick={() => setToggle((prev) => !prev)}
                      className="font-semibold md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500"
                    >
                      <ActiveLink to="/login">Login</ActiveLink>
                    </li>
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
