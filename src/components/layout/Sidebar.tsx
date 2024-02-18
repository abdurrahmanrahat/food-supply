import { IoServerOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuPlusCircle } from "react-icons/lu";
import { SiHomeadvisor } from "react-icons/si";
import ActiveLink from "../ui/ActiveLink";

const Sidebar = () => {
  return (
    <aside className="bg-[#3D0066] h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5 text-primary-text">
      <nav className="flex flex-col gap-2">
        <h2 className="text-primary-text text-[28px] font-bold">
          Food<span className="text-secondary-text opacity-80">SUP</span>
        </h2>

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
    </aside>
  );
};

export default Sidebar;
