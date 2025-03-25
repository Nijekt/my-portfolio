import React from "react";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import MessageForm from "./MessageForm";

const Contact = () => {
  return (
    <section id="contact" className="section bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-5">Contact Me</h2>
          <p className="max-w-[520px] text-2xl text-center text-[#a8adb4] mb-20">
            I'm excited to connect with you!. Let's start a conversation – I'm
            just a message away from exploring new opportunities together
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2 ml-4">
            <div className="flex flex-col lg:flex-row gap-x-4 ">
              <MdMailOutline size={35} color="#ceae7d" className="mr-3" />
              <div>
                <h4 className="text-xl mb-2">Have a question?</h4>
                <a
                  className="font-normal text-[#ceae7d]"
                  href="mailto: nktsnz111@gmail.com"
                >
                  Email me at nktsnz111@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-4 ">
              <IoLocationOutline size={35} color="#ceae7d" className="mr-3" />
              <div>
                <h4 className="text-xl mb-2">Location</h4>
                <p className="text-[#ceae7d] font-normal">Poland, Warsaw</p>
              </div>
            </div>
          </div>
          <MessageForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
