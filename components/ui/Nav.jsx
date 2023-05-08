import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { AiFillCloseCircle } from "react-icons/ai";

function Nav({ setIsNav }) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen  z-30  
        after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 
        after:left-0  grid 
    "
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsNav(false);
        }}
      >
        <div className="w-full h-full grid place-content-center ">
          <div className="z-50 relative  p-5 md:w-[600px] w-[370px]  rounded-3xl ">
           
            <button    onClick={() => {
          setIsNav(false);
        }} className="absolute top-2 right-2" >
              <AiFillCloseCircle className="hover:text-primary transition-all h-6 w-6"  />
            </button>
            <ul className=" gap-x-2 grid text-center mt-16 ">
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
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Nav;
