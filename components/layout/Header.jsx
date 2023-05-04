import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../ui/Search";
import Nav from "../ui/Nav";

function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const [IsNav, setIsNav] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary  ">
      <div className="container mx-auto flex justify-between text-white items-center h-full  ">
        <div>
          <Logo />
        </div>
        <nav className="sm:static absolute  sm:inline-block hidden ">
          <ul className="flex gap-x-2  ">
            <li>
              <a
                href=""
                className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"
              >
                Anasayfa
              </a>
            </li>
            <li>
              <a
                href=""
                className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"
              >
                Menü
              </a>
            </li>
            <li>
              <a
                href=""
                className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a
                href=""
                className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"
              >
                Envanter
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center ">
        <button className="sm:hidden inline-block" 
           onClick={() => {
            setIsNav(!IsNav);
          }}>
            <GiHamburgerMenu />
          </button>
          <a href="">
            {" "}
            <FaUserAlt />{" "}
          </a>
          <a href="">
            {" "}
            <HiShoppingCart />{" "}
          </a>
          <button
            className=""
            onClick={() => {
              setIsSearch(!isSearch);
            }}
          >
            {" "}
            <FaSearch />{" "}
          </button>
          <a href="" className="md:inline-block hidden">
            <button className="btn-primary uppercase">online satış</button>
          </a>
        
        </div>
      </div>

      {isSearch && <Search setIsSearch={setIsSearch}></Search>}
      {IsNav && <Nav setIsNav={setIsNav}></Nav>}
    </div>
  );
}

export default Header;
