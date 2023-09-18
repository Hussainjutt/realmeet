import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";
import logo2 from "../../../assets/icons/logo2.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ setOpen, open }) => {
  const links = [
    { title: "Home", route: "/" },
    { title: "Active Members", route: "/activeMembers" },
    { title: "Pricing", route: "/pricing" },
    { title: "Success", route: "/success" },
    { title: "Contact us", route: "/contactUs" },
  ];
  const router = useLocation();
  return (
    <nav className=" py-4 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
      <div className="flex items-center justify-between mx-auto lg:px-6 max-w-7xl px-14">
        <div className="flex flex-row items-center ">
          <Link
            className="text-link hover:text-link-light transition-colors no-underline [&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors"
            to={"/"}
          >
            <div className="flex flex-row items-center gap-1">
              <img src={logo} alt="main-logo" className="w-14" />
              <img src={logo2} alt="main-logo" className="w-14" />
            </div>
          </Link>
        </div>
        <ul className="lg:flex hidden items-center content-center gap-6 ">
          {links.map((link, key) => (
            <li
              key={key}
              className={`font-medium relative `}
              style={{
                letterSpacing: ".03px",
              }}
            >
              <Link
                className={`${
                  router.pathname === link.route
                    ? "text-cstm_primary_pink-100"
                    : "text-cstm_dark-100"
                } transition-colors no-underline [&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors text-accents-6 duration-200 hover:text-accents-8 cursor-pointer`}
                to={link.route}
              >
                {link.title}
                <span
                  className={`transition-all bg-cstm_primary_pink-100 ${
                    router.pathname === link.route ? "w-full" : "w-0"
                  } after:transition-all border-none left-0 h-1  rounded absolute  top-14`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link href={"/signIn"}>Sign In</Link>
          <Link href={"/register"}>
            <button className="primary-btn">Register</button>
          </Link>
          <button
            className="primary-btn lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <GiHamburgerMenu style={{ fontSize: "22px", color: "#fff" }} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
