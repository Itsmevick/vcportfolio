import Image from "next/image";
import React from "react";
import ContactImage from "../public/assets/contact.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id='contact' className="w-full lg:w-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest text-[#5651ef]">Contact</p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 duration-300"
                  src={ContactImage}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and lets talk
                </p>
              </div>
              <div className="uppercase p-8">
                <p>Connect with me</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm py-2 uppercase">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 fle border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm py-2 uppercase">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 fle border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="name" className="text-sm py-2 uppercase">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 fle border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="name" className="text-sm py-2 uppercase">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 fle border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="name" className="text-sm py-2 uppercase">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              
              </form>
            </div> 
          </div>
        </div>
        <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="m-auto text-[#5651e5]" size={30}/>
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Contact;
