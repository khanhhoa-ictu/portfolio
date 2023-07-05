import { useState } from "react";
import { Link } from "react-router-dom";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleClickLogo = () => {
    setActive("");
    window.scrollTo(0, 0);
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={handleClickLogo}
        >
          <img
            src="https://api.logo.com/api/v2/images?logo=logo_e9b4415c-1de0-4406-a669-b5dbd6c1b672&format=webp&margins=0&quality=60&width=500&background=transparent&u=1688358440"
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Khánh Hòa &nbsp;{" "}
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? `text-white` : `text-secondary`
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? `text-white` : `text-secondary`
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => setToggle(!toggle)}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
