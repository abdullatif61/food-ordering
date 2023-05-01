import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import Search from "../ui/Search";

function Header() {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div className="container mx-auto flex justify-between text-white items-center h-full">
        <div>
          <Logo />
        </div>
        <nav>
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
          <a href="">
            <button className="btn-primary uppercase">online satış</button>
          </a>
        </div>
      </div>

      {isSearch && (
        <Search setIsSearch={setIsSearch}></Search>
      )}
    </div>
  );
}

export default Header;
