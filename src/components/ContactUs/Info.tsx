import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Info = () => {
  return (
    <div className="flex flex-col gap-y-5 items-start justify-center mx-10 lg:mx-auto text-white">
      <div className="flex  items-start gap-x-3 text-xl">
        <p><FaLocationDot /></p>
        <p className="max-w-xl ">
          104, 1st Floor, Good will Samruddhi, Lane No18, Gokul Nagar, Dhanori,
          Pune Pin- 411015
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex  items-center gap-x-3 text-lg lg:text-xl">
        <p><IoMdMail /></p>
        <p>Mail Id:  belnetspace@gmail.com</p>
        </div>
        <div className="flex items-center gap-x-3  text-lg lg:text-xl">
        <p><FaPhoneAlt /></p>
        <p>Mobile No: +91 9370351388</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
