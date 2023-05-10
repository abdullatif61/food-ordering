import Image from "next/image";
import Title from "../ui/Title";
import { MdShoppingCart } from "react-icons/md";

function MenuItem() {
  return (
    <div className="bg-secondary  mx-4 mt-4 rounded-xl w-60 ">
      <div className="bg-white  w-full items-center flex flex-col rounded-es-2xl">
        <div className="w-32   h-32 relative ">
          <Image src={"/images/pizza.jpg"} alt="" fill />
        </div>
      </div>

      <div className="text-white px-4 py-2">
        <Title>Lorem, ipsum.</Title>
        <p className="">
          Lorem ipsum dolor sit 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id at in laborum veritatis iste reiciendis recusandae, et suscipit maiores officia!
        </p>
        <div className="flex items-center justify-between px-2 py-6">
          <span>$20</span>
          <button className="bg-primary rounded-full border-8  border-primary">
            <MdShoppingCart size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
