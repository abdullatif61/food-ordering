import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";
import {useFormik } from 'formik';


const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    
    actions.resetForm();
  };

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    onSubmit,
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
    },
    {
      id: 5,
  
      name: "date",
      type: "datetime-local",
      value: values.date,
    },
  ];
  return (
    <div className=" mx-auto py-16 grid lg:grid-cols-2 grid-cols-1  gap-10 items-center">
      <form className="sm:order-1 order-2 mx-auto w-5/6" onSubmit={handleSubmit} >
        <div>
          <Title addClass={"text-3xl"}>Bize Ulaşın</Title>
        </div>
        <div className="my-10  gap-y-4 flex flex-col " >
          {inputs.map((input)=>(
            <Input key={input.id} {...input} onChange={handleChange} />
          ))}
        </div>
        <div>
          <button type="submit" className="btn-primary">Gönder</button>
        </div>
      </form>

      <div className="sm:order-2 order-1 mx-auto  w-5/6  h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1197.9112932545715!2d28.897351735760022!3d40.99701067881266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb6d4eb33a69%3A0xf4e5678305fb52d9!2sVatan%20Oto%20Y%C4%B1kama%20Kuaf%C3%B6r%20Servisi!5e0!3m2!1str!2str!4v1684172950470!5m2!1str!2str"
          allowfullscreenn=""
          className="w-full sm:h-full h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Reservation;
