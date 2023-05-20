import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";

const Reservation = () => {
  return (
    <div className=" mx-auto py-16 grid lg:grid-cols-2 grid-cols-1  gap-10 items-center">
      <div className=" mx-auto w-5/6">
        <div>
          <Title>Bize Ulaşın</Title>
        </div>
        <div className="my-10  gap-y-4 flex flex-col">
          <Input />
          <Input />
          <Input />
          <Input />
        </div>
        <div>
          <button className="btn-primary">Gönder</button>
        </div>
      </div>

      <div className="  flex mx-auto  ">
        <div >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1197.9112932545715!2d28.897351735760022!3d40.99701067881266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb6d4eb33a69%3A0xf4e5678305fb52d9!2sVatan%20Oto%20Y%C4%B1kama%20Kuaf%C3%B6r%20Servisi!5e0!3m2!1str!2str!4v1684172950470!5m2!1str!2str"
            allowfullscreenn=""
            className="md:w-96 w-screen h-96 px-10 "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
