import {
  FaEnvelope,
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-8">
      <Container className="py-6">
        <div className="md:flex mt-4">
          {/* About company */}
          <div className="md:w-[40%] mb-4">
            <Link to="/">
              <h2 className="text-primary-text text-[28px] font-bold mb-4">
                Food<span className="text-secondary-text opacity-80">SUP</span>
              </h2>
            </Link>
            <p className="max-w-[46ch]">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>

            <div className="mt-4 flex gap-4">
              <a
                className="text-xl md:text-[22px] hover:text-secondary-text transition-all duration-500"
                href="#"
              >
                <FaFacebook />
              </a>
              <a
                className="text-xl md:text-[22px] hover:text-secondary-text transition-all duration-500"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                className="text-xl md:text-[22px] hover:text-secondary-text transition-all duration-500"
                href="#"
              >
                <FaTwitter />
              </a>
              <a
                className="text-xl md:text-[22px] hover:text-secondary-text transition-all duration-500"
                href="#"
              >
                <FaGooglePlusG />
              </a>
            </div>
          </div>

          {/* search something */}
          <div className="md:w-[30%] mb-4 py-8 md:py-0">
            <h5 className="text-uppercase mb-4 text-[24px] md:text-[28px] font-semibold">
              Search something
            </h5>
            <div className="mb-4">
              <input
                type="text"
                id=""
                className="bg-transparent p-1 border-b"
                placeholder="Search"
              />
            </div>
            <div>
              <p className="flex gap-2 items-center">
                <FaLocationArrow className="inline" />
                <span>Warsaw, 00-967, Poland</span>
              </p>
              <p className="flex gap-2 items-center">
                <FaEnvelope className="inline" />
                <span>contact@example.com</span>
              </p>
              <p className="flex gap-2 items-center">
                <FaPhoneAlt className="inline" />
                <span>+ 48 234 567 88</span>
              </p>
            </div>
          </div>

          {/* opening hour */}
          <div className="md:w-[30%] mb-4">
            <h5 className="text-uppercase mb-4 text-[24px] md:text-[28px] font-semibold">
              Important Links
            </h5>

            <div className="">
              <ul className="space-y-2 ">
                <li className="font-semibold md:text-[18px] 2xl:text-[19px] hover:text-secondary-text transition-all duration-500">
                  <Link to="/">Home</Link>
                </li>
                <li className="font-semibold md:text-[18px] 2xl:text-[19px] hover:text-secondary-text transition-all duration-500">
                  <Link to="/supplies">All Supplies</Link>
                </li>
                <li className="font-semibold md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
                  <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li className="font-semibold md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <hr className="mb-0" />
      {/* Copyright */}
      <div className="py-[10px]">
        <p className="text-center text-[15px]">© copyright of my design</p>
      </div>
    </div>
  );
};

export default Footer;
