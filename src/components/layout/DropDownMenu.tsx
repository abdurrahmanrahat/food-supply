import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import ActiveLink from "../ui/ActiveLink";

const DropDownMenu = () => {
  const [enter, setEnter] = useState(false);

  return (
    <div className="relative">
      <li
        onMouseEnter={() => setEnter((prev) => !prev)}
        onMouseLeave={() => setEnter((prev) => !prev)}
        onClick={() => setEnter((prev) => !prev)}
        className="font-medium md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500 cursor-pointer"
      >
        More <FaAngleDown className="inline" />
      </li>
      {enter && (
        <div
          onMouseEnter={() => setEnter((prev) => !prev)}
          onMouseLeave={() => setEnter((prev) => !prev)}
          className="absolute left-24 md:left-0 z-[999] bg-primary-bg w-[140px] p-4 rounded-md space-y-2"
        >
          <li className="font-medium md:text-[17px] 2xl:text-[18px] text-white hover:text-secondary-text transition-all duration-500">
            <ActiveLink to="/volunteer">Volunteer</ActiveLink>
          </li>
          <li className="font-medium md:text-[17px] 2xl:text-[18px] text-white hover:text-secondary-text transition-all duration-500">
            <ActiveLink to="/leaderboard">Leaderboard</ActiveLink>
          </li>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
