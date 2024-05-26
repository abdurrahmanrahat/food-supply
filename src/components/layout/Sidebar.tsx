import { AiOutlineHome } from "react-icons/ai";
import { IoServerOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuPlusCircle } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import ActiveLink from "../ui/ActiveLink";

const Sidebar = () => {
  return (
    <aside className="bg-[#3D0066] h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5 text-primary-text">
      <nav className="flex flex-col gap-2">
        <Link to="/">
          <h2 className="text-primary-text text-[28px] font-bold">
            Food<span className="text-secondary-text opacity-80">SUP</span>
          </h2>
        </Link>

        <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
          <ActiveLink to="/admin/dashboard">
            <div className="flex items-center gap-2">
              <LuLayoutDashboard className="text-[18px]" />
              <span className="truncate">Dashboard</span>
            </div>
          </ActiveLink>
        </div>

        <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
          <ActiveLink to="/admin/create-supply">
            <div className="flex items-center gap-2">
              <LuPlusCircle className="text-[18px]" />
              <span className="truncate">Create Supply</span>
            </div>
          </ActiveLink>
        </div>

        <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
          <ActiveLink to="/admin/supplies">
            <div className="flex items-center gap-2">
              <IoServerOutline className="text-[18px]" />
              <span className="truncate">All Supplies</span>
            </div>
          </ActiveLink>
        </div>

        <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
          <ActiveLink to="/admin/create-testimonial">
            <div className="flex items-center gap-2">
              <MdOutlineRateReview className="text-[18px]" />
              <span className="truncate">Make Review</span>
            </div>
          </ActiveLink>
        </div>

        <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
          <ActiveLink to="/">
            <div className="flex items-center gap-2">
              <AiOutlineHome className="text-[18px]" />
              <span className="truncate">Home</span>
            </div>
          </ActiveLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
