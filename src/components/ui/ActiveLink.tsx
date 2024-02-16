import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TActiveLinkProps = {
  to: string;
  children: ReactNode;
};

const ActiveLink = ({ to, children }: TActiveLinkProps) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-[#DAA868]" : "")}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
