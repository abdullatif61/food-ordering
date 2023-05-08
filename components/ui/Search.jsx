import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { AiFillCloseCircle } from "react-icons/ai";

function Search({ setIsSearch }) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen  z-30 
        after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 
        after:left-0 after:opacity-60 grid 
    "
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSearch(false);
        }}
      >
        <div className="w-full h-full grid place-content-center ">
          <div className="z-50 relative border-2 p-5 md:w-[600px] w-[370px] bg-white rounded-3xl ">
            <Title
              addClass="text[40px] uppercase text-center   "
            >
              Search
            </Title>
            <input
              type="text"
              placeholder="search..."
              className="w-full border my-10"
            />

            <ul>
              <li className="flex items-center justify-between p-1 transition-all hover:bg-primary ">
                <div className="relative flex   ">
                  <img
                    src="/images/pizza.jpg"
                    width={50}
                    height={50}
                    alt=""
                    srcset=""
                  />
                </div>
                <span className="font-bold">Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
            <ul>
              <li className="flex items-center justify-between p-1 transition-all hover:bg-primary ">
                <div className="relative flex   ">
                  <img
                    src="/images/pizza.jpg"
                    width={50}
                    height={50}
                    alt=""
                    srcset=""
                  />
                </div>
                <span className="font-bold">Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
            <ul>
              <li className="flex items-center justify-between p-1 transition-all hover:bg-primary ">
                <div className="relative flex   ">
                  <img
                    src="/images/pizza.jpg"
                    width={50}
                    height={50}
                    alt=""
                    srcset=""
                  />
                </div>
                <span className="font-bold">Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
            <button    onClick={() => {
          setIsSearch(false);
        }} className="absolute top-2 right-2" >
              <AiFillCloseCircle className="hover:text-primary transition-all h-6 w-6"  />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Search;
