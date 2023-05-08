import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../ui/Search";
import Nav from "../ui/Nav";
import { useRouter } from 'next/router'
function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const [IsNav, setIsNav] = useState(false);
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div className={`h-[5.5rem] ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"} z-50 relative  right-0 `} >
      <div className=" sm:px-10 px-4 flex justify-between text-white items-center h-full w-full  left-0 right-0 ">
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
            <button className="btn-primary uppercase whitespace-nowrap  "><p>online satış</p> </button>
          </a>
        
        </div>
      </div>

      {isSearch && <Search setIsSearch={setIsSearch}></Search>}
      {IsNav && <Nav setIsNav={setIsNav}></Nav>}
    </div>
  );
}

export default Header;
