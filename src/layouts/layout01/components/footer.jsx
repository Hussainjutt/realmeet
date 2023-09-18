import logo3 from "../../../assets/icons/logo3.svg";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandInstagram } from "react-icons/tb";
import { BiLogoYoutube } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { title: "Home", route: "/" },
    { title: "Active Members", route: "/activeMembers" },
    { title: "Pricing", route: "/pricing" },
    { title: "Success", route: "/success" },
    { title: "Contact us", route: "/contactUs" },
  ];
  const socials = [
    { icon: AiOutlineTwitter, link: "twitter.com" },
    { icon: TiSocialLinkedin, link: "linkedin.com" },
    { icon: TbBrandInstagram, link: "instagrm.com" },
    { icon: BiLogoYoutube, link: "youtube.com" },
  ];
  return (
    <footer className="py-4 relative z-20 bg-cstm_dark_secondary-100 shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
      <div className="mx-auto max-w-5xl ">
        <div className="w-full flex  items-center justify-between pt-12 px-6">
          <Link className="flex-1 inline-flex justify-start" href="/">
            <div className="flex flex-row items-center gap-1">
              <img src={logo3} alt="main-logo" className="w-36" />
            </div>
          </Link>
          <div className="w-full flex-1 flex flex-nowrap justify-around items-start border-b-cstm_aqua-100">
            <ul className="flex-col items-center">
              {links.map((link, key) => (
                <li
                  key={key}
                  className={`font-light my-1`}
                  style={{
                    letterSpacing: ".03px",
                  }}
                >
                  <Link className={`text-white`} to={link.route}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex-col items-center">
              {links.map((link, key) => (
                <li
                  key={key}
                  className={`font-light my-1`}
                  style={{
                    letterSpacing: ".03px",
                  }}
                >
                  <Link className={`text-white`} to={link.route}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="mt-12 h-0.5 border-t-0 bg-white opacity-100 dark:opacity-50" />
        <div className="px-6 pt-4 py-2 flex justify-between">
          <div className="flex justify-start gap-6">
            {socials.map((soc, key) => (
              <Link to={soc.link} key={key}>
                <soc.icon style={{ color: "#fff", fontSize: "24px" }} />
              </Link>
            ))}
          </div>
          <small className="text-white">
            © {new Date().getFullYear()} Real Mate. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
