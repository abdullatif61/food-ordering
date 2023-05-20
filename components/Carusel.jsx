import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplayspeed: 3000,
    initialSlide: 1,
    customPaging: (i) => (
      <div
        className="w-3 h-3 border bg-white rounded-full mt-10 "
      ></div>
    ),
  };
  return (
    <div
      className="w-screen h-screen  mx-auto -mt-[88px]  " // {h-[calc(100vh_-_88px)]}
    >
      <div className="absolute top-0 left-0 w-full h-full ">
        <Image
          src="/images/burger.jpg"
          alt=""
          style={{ objectFit: "cover" }}
          priority={true} // {false} | {true}
          fill
        />{" "}
      </div>
      <div className="px-20">
        <Slider {...settings}>
          <div>
            <div className=" text-white  mt-48 flex flex-col items-start gap-y-10   ">
              <Title addClass={`text-6xl`}>Hamburger Yiyelim</Title>
              <p className=" sm:w-2/5 w-full   ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                recusandae aliquid magni animi facere aspernatur, voluptatibus
             
              </p>
              <button className="btn-primary">Satın Al</button>
            </div>
          </div>
          <div>
            <div className=" text-white  mt-48 flex flex-col items-start gap-y-10   ">
              <Title addClass={`text-6xl`}>Köfte Yiyelim</Title>
              <p className=" sm:w-2/5 w-full   ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                recusandae aliquid magni animi facere aspernatur, voluptatibus
             
              </p>
              <button className="btn-primary">Satın Al</button>
            </div>
            
          </div>
          <div>
            <div className=" text-white  mt-48 flex flex-col items-start gap-y-10  sm:mx-20 mx-auto ">
              <Title addClass={`text-6xl`}>Pizza Yiyelim</Title>
              <p className=" sm:w-2/5 w-full   ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                recusandae aliquid magni animi facere aspernatur, voluptatibus
              
              </p>
              <button className="btn-primary">Satın Al</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carusel;
