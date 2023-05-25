import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary w-screen sm:h-screen  mt-10  p-4 ">
        
      <div className=" my-auto  container  mx-auto grid sm:grid-cols-2 grid-cols-1 w-4/5 h-full 
       text-center content-center items-center justify-between ">
        <div className="place-content-center  sm:order-1 order-2 grid  ">
          <div className="relative h-[600px] w-[375px]  ">
            <Image src="/images/about-img.png"
            alt=""
            loading="lazy"
            fill
        
             />
          </div>
        </div>

        <div className=" sm:order-2 order-1  ">
          <Title addClass={"text-white text-[50px]"}>Biz kimiz ?</Title>
          <br />
          <p className="text-white font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Consequuntur voluptas recusandae perspiciatis animi maxime itaque{" "}
            <br />
            quia obcaecati ut sapiente? Aliquid!
          </p>
          <button className="">Devamını Oku</button>
        </div>
      </div>
    </div>
  );
};

export default About;
