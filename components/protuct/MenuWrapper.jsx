import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className=" mx-auto flex flex-col">
      <div className=" flex flex-col items-center  ">
        <Title addClass={"text-4xl"}>Our Menu</Title>
        <div className="mt-10">
          <button
            className="px-6 py-2 rounded-3xl bg-secondary text-white">All</button>
           <button
            className="px-6 py-2 rounded-3xl">Burger</button> <button
            className="px-6 py-2 rounded-3xl">Pizza</button> <button
            className="px-6 py-2 rounded-3xl">Drinks</button>
        </div>
        <div className=" mt-8  grid sm:grid-cols-2 grid-cols-1  md:grid-cols-3   gap-4  ">
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
        </div>
      </div>
    </div>
  );
};

export default MenuWrapper;
