import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";

function Search({ setIsSearch }) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen  z-30 
        after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 
        after:left-0 grid
    "
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSearch(false);
        }}
      >
        <div className="w-full h-full grid place-content-center ">
          <div className="z-50 relative">
            <Title
              addClass="text-9xl uppercase  "
              propsgonder={"ne gelirse senin ile o gelir elinle gibi bişi"}
            >
              Title
            </Title>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Search;
