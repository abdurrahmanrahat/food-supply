import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoServerOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuPlusCircle } from "react-icons/lu";
import { SiHomeadvisor } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../ui/ActiveLink";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="md:grid grid-cols-12">
      <div className="hidden md:block col-span-2">
        <Sidebar></Sidebar>
      </div>

      {/* for mobile */}
      <div className="md:hidden relative">
        <div className="bg-[#3D0066] flex justify-between px-10 py-2">
          <div>
            <Link onClick={() => setToggle((prev) => !prev)} to="/">
              <h2 className="text-[#D5E7F3] text-[28px] font-bold">
                Food
                <span className="text-secondary-text opacity-80">SUP</span>
              </h2>
            </Link>
          </div>

          {/* toggle open icon */}
          <div onClick={() => setToggle((prev) => !prev)}>
            <GiHamburgerMenu className="w-8 h-8 text-[#D5E7F3]" />
          </div>
        </div>

        {toggle && (
          <nav className="flex flex-col gap-2 bg-[#3D0066] p-10 absolute top-2 w-full text-primary-text">
            <div className="flex items-center justify-between mb-5">
              <div>
                <Link onClick={() => setToggle((prev) => !prev)} to="/">
                  <h2 className="text-[#D5E7F3] text-[28px] font-bold">
                    Food
                    <span className="text-secondary-text opacity-80">SUP</span>
                  </h2>
                </Link>
              </div>
              <div onClick={() => setToggle((prev) => !prev)}>
                <IoMdClose className="h-8 w-8" />
              </div>
            </div>

            <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/admin/dashboard">
                <div className="flex items-center gap-2">
                  <LuLayoutDashboard className="text-[18px]" />
                  <span className="truncate">Dashboard</span>
                </div>
              </ActiveLink>
            </p>

            <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/admin/create-supply">
                <div className="flex items-center gap-2">
                  <LuPlusCircle className="text-[18px]" />
                  <span className="truncate">Create Supply</span>
                </div>
              </ActiveLink>
            </p>

            <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/admin/supplies">
                <div className="flex items-center gap-2">
                  <IoServerOutline className="text-[18px]" />
                  <span className="truncate">All Supplies</span>
                </div>
              </ActiveLink>
            </p>

            <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
              <ActiveLink to="/">
                <div className="flex items-center gap-2">
                  <SiHomeadvisor className="text-[18px]" />
                  <span className="truncate">Home</span>
                </div>
              </ActiveLink>
            </p>
          </nav>
        )}
      </div>
      <div className="col-span-10 h-full px-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
